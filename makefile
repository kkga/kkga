MAKEFLAGS := -j 4 --silent --always-make
DENO := deno run --allow-net --allow-env --allow-read=./ --allow-write=./ --unstable
INPUTDIR = .
OUTPUTDIR = _site
TER = /home/kkga/projects/ter/main.ts

clean:
	rm -rf $(OUTPUTDIR)

build:
	$(DENO) $(TER) $(INPUTDIR) $(OUTPUTDIR)

watch:
	while sleep 0.1; do fd -I -g "**/*.{md,css,eta,ts}" | entr -d $(DENO) /home/kkga/projects/ter/main.ts $(INPUTDIR) $(OUTPUTDIR); done

serve:
	$(DENO) https://deno.land/std/http/file_server.ts $(OUTPUTDIR) --port 8080

dev: watch serve
