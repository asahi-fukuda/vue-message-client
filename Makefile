.PHONY: serve

serve:
	docker run -it --rm -v ${PWD}:/src -w /src -p 3000:3000 training/vue-message-client yarn run serve
