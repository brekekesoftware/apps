pret: js-import-sort prettier

lint:
	make -s git EXT='js' \
	| xargs npx eslint --ignore-pattern='!*';

deploy:
	yarn build \
	&& ssh apps.brekeke.com "rm -rf /var/www/apps/*" \
	&& scp -r build/* apps.brekeke.com:/var/www/apps

js-import-sort:
	make -s git EXT='js' \
	| xargs npx js-import-sort --silent=1 --path;

prettier:
	make -s git EXT='html|scss|js|json|md' \
	| xargs npx prettier --loglevel=silent --write;

git:
ifdef ALL
	make -s git-all;
else
	make -s git-changed-but-not-deleted;
endif

git-all:
	bash -c 'comm -3 <(git ls-files) <(git ls-files -d)' \
	| egrep -h '\.(${EXT})$$';

git-changed-but-not-deleted:
	git status -u --porcelain \
	| egrep -h '^[^D]{2}.*\.(${EXT})$$' \
	| cut -c 4-;
