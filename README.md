Calcolo del prezzo del biglietto del treno
===
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.
**MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
**BONUS:
Controllare la validità dei dati e in caso di fallimento generare un messaggio di errore in pagina o con un alert()

# Svolgimento
1. Costruisco un codice HTML basilare
2. Riprendo gli elementi HTML di imput nel file JS in modo da poter utilizzare gli imput come variabili
3. Applico la logica dell'esercizio precedente per il calcolo del prezzo utilizzando i dati in arrivo dagli imput
4. Creo un output in pagina in cui visualizzo il risultato 
5. Mi occupo del lato grafico della pagina