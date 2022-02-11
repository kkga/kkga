---
title: Pushdown automata in Godot
date: 2021-01-17
tags:
  - gamedev
  - godot
---

```gdscript
# StateMachine.gd

class_name StateMachine
extends Node

signal transitioned(state_path)

export var initial_state := NodePath()

onready var state: State = get_node(initial_state) setget set_state

var _stack := []
var _state_name := ""


func _init() -> void:
	add_to_group("state_machine")


func _ready() -> void:
	yield(owner, "ready")
	_stack.push_front(initial_state)
	state.enter()


func _unhandled_input(event: InputEvent) -> void:
	state.unhandled_input(event)


func _process(delta: float) -> void:
	state.process(delta)


func _physics_process(delta: float) -> void:
	state.physics_process(delta)


func transition_to(target_state_path: String, msg := {}) -> void:
	if not has_node(target_state_path):
		return
	var target_state := get_node(target_state_path)
	state.exit()
	self.state = target_state
	state.enter(msg)
	emit_signal("transitioned", target_state_path)


func push_state(state_path: String, msg := {}) -> void:
	_stack.push_front(state_path)
	transition_to(state_path, msg)


func pop_state() -> void:
	_stack.pop_front()
	transition_to(_stack[0])


func set_state(value: State) -> void:
	state = value
	_state_name = state.name
```

```gdscript
# State.gd

class_name State
extends Node

onready var _state_machine := _get_state_machine(self)

var _superstate: State = null


func _ready() -> void:
	yield(owner, "ready")
	if not get_parent().is_in_group("state_machine"):
		_superstate = get_parent()


func unhandled_input(event: InputEvent) -> void:
	return


func process(delta: float) -> void:
	return


func physics_process(delta: float, msg := {}) -> void:
	return


func enter(msg := {}) -> void:
	return


func exit() -> void:
	return


func _get_state_machine(node: Node) -> Node:
	if node != null and not node.is_in_group("state_machine"):
		return _get_state_machine(node.get_parent())
	return node
```
