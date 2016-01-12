.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/day2.css --output bundle/day2.css

.PHONY: server
server:
	browser-sync start --server --files='day2.html,bundle/day2.css'


.PHONY: clean
clean:
	rm -r bundle