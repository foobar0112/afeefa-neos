<style>
li { margin-bottom: 1em; }
a:link {text-decoration: none; }
</style>
<h1>PhraseApp Sync</h1>

<h4>Current Config (TODO)</h4>
<pre>
	local db:			[read from sql.php]
	dev mode for AF > PA:		[boolean | read from importFromAfeefaToPhraseApp.php]
	dev mode for PA > AF:		[boolean | read from importFromPhraseAppToAfeefa.php]
</pre>


<h3>PhraseApp ⇒ Neos</h3>
<ol>
	<li>import all translations from PhraseApp into neos DB using this script:<br>
		<a href="importFromPhraseAppToAfeefa.php">/importFromPhraseAppToAfeefa.php</a></li>
</ol>
<h3>Neos ⇒ PhraseApp</h3>
<ol>
	<li>export all entries from Afeefa DB and save as JSON file under ../phraseappAPI/jsonExportFromAfeefa/ using this script:<br>
		<a href="importFromAfeefaToPhraseApp.php?step=exportFromAfeefa">/importFromAfeefaToPhraseApp.php?step=exportFromAfeefa</a></li>

	<li>transfer entries from downloaded json files to PhraseApp using this script:<br>
		<a href="importFromAfeefaToPhraseApp.php?step=importToPhraseApp">/importFromAfeefaToPhraseApp.php?step=importToPhraseApp</a></li>
	<ul>
		<li>"Update translations" option is set TRUE (neos overwrites phraseapp)</li>
	</ul>

	<li>Check "Uploads" section on PhraseApp website</li>
	<ul>
		<li>Go to PhraseApp website: delete "unmentioned" keys in DE upload (these entries were deleted in neos)</li>
	</ul>
</ol>