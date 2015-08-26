#Chimp


##Setup

prerequisites are node & java (& phantomjs if you want to use it)

##First run
```bash
$ npm install
$ ./node_modules/.bin/chimp
```
(will install selenium)

##Development
`ROOT_URL` is "Sync" url (defaults to http://localhost:3000)
`browser` set your preferred browser

example:
```bash
$ ROOT_URL=http://localhost:3000 ./node_modules/.bin/chimp --offline --browser=phantomjs
```


##Debugging

for live in browser debugging - put `client.debug()` to your step

for debugging cucmber code, run:
```bash
$ node --debug ./node_modules/.bin/chimp --offline --browser=phantomjs --debugBrkCucumber=5859
```
and in another terminal:
```bash
$ node-inspector
```
