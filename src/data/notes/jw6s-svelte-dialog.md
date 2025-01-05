---
title: Svelte singleton dialog component using store and context
date: 2023-03-09
tags:
  - svelte
---

So I was trying to create a simple singleton `<Dialog>` component to wrap around
the native html dialog.

I have the `<Dialog/>` injected at the root layout which emits custom events via
the svelte's event dispatcher: not much logic in there, just a basic wrapper
around html `<dialog>` with custom events.

In the same root layout file I create a writable store for confirmation dialogs.
The store is basically a reactive connection to the `<Dialog/>` instance in the
root layout as events from the `<Dialog/>` are bound to the store.

```typescript
<script lang='ts'>
  const confirmDialog = writable({
    title: "",
    message: "",
    confirmAction: "",
    confirm: () => {},
    cancel: () => {},
  });

  let dialog: Dialog
</script>

<Dialog
  bind:this={dialog}
  title={$confirmDialog.title}
  message={$confirmDialog.message}
  confirmAction={$confirmDialog.confirmAction}
  on:confirm={$confirmDialog.confirm}
  on:cancel={$confirmDialog.cancel}
/>

<slot />
```

I then put the
store into context and give users a simple `confirm({...})` function to update
it, which returns a Promise that gets resolved inside the dialog.

```typescript
setContext("dialog", {
  confirm: ({ title, message, confirmAction }) => {
    dialog.show();
    return new Promise((resolve) => {
      confirmDialog.set({
        title,
        message,
        confirmAction,
        confirm: () => {
          dialog.close();
          resolve(true);
        },
        cancel: () => {
          dialog.close();
          resolve(false);
        },
      });
    });
  },
});
```

In the end, this is how I use the context in Svelte SubmitFunctions across the app (in this case to
ask for confirmation before form submission):

```typescript
<form use:enhance={async ({ cancel }) => {
  const confirmed = await confirm({
    title: 'Are you sure you want to delete multiple items?',
    message: "You can't undo this action.",
    confirmAction: 'Delete'
  });
  if (!confirmed) cancel()
}
```
