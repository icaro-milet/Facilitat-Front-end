/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"../kendo.core.js";!function(e,o){kendo.ui.FilterCell&&(kendo.ui.FilterCell.prototype.options.operators=e.extend(!0,kendo.ui.FilterCell.prototype.options.operators,{date:{eq:"È uguale a",gt:"È dopo",gte:"È dopo o uguale a",lt:"È prima",lte:"È prima o uguale a",neq:"Non è uguale a"},number:{eq:"È uguale a",gt:"È più grande di",gte:"È più grande o uguale a",lt:"È più piccolo di",lte:"È più piccolo o uguale a",neq:"Non è uguale a"},string:{contains:"Contiene",doesnotcontain:"Non contiene",endswith:"Finisce con",eq:"È uguale a",neq:"Non è uguale a",startswith:"Inizia con"},enums:{eq:"È uguale a",neq:"Non è uguale a"}})),kendo.ui.FilterMenu&&(kendo.ui.FilterMenu.prototype.options.operators=e.extend(!0,kendo.ui.FilterMenu.prototype.options.operators,{date:{eq:"È uguale a",gt:"È dopo",gte:"È dopo o uguale a",lt:"È prima",lte:"È prima o uguale a",neq:"Non è uguale a"},number:{eq:"È uguale a",gt:"È più grande di",gte:"È più grande o uguale a",lt:"È più piccolo di",lte:"È più piccolo o uguale a",neq:"Non è uguale a"},string:{contains:"Contiene",doesnotcontain:"Non contiene",endswith:"Finisce con",eq:"È uguale a",neq:"Non è uguale a",startswith:"Inizia con"},enums:{eq:"È uguale a",neq:"Non è uguale a"}})),kendo.ui.ColumnMenu&&(kendo.ui.ColumnMenu.prototype.options.messages=e.extend(!0,kendo.ui.ColumnMenu.prototype.options.messages,{columns:"Colonne",filter:"Filtro",sortAscending:"In ordine crescente",sortDescending:"In ordine decrescente",settings:"Impostazioni colonna",done:"Fatto",lock:"Bloccare",unlock:"Sbloccare"})),kendo.ui.RecurrenceEditor&&(kendo.ui.RecurrenceEditor.prototype.options.messages=e.extend(!0,kendo.ui.RecurrenceEditor.prototype.options.messages,{repeat:"Ripeti",daily:{interval:"giorno(i)",repeatEvery:"Ripeti ogni: "},end:{after:"Dopo",occurrence:"Occorrenza(e)",label:"Fine:",never:"Mai",on:"Il",mobileLabel:"Ends"},frequencies:{daily:"Ogni giorno",monthly:"Ogni mese",never:"Mai",weekly:"Ogni settimana",yearly:"Ogni anno"},monthly:{day:"Giorno",interval:"mese(i)",repeatEvery:"Ripeti ogni: ",repeatOn:"Repeti quando: ",date:"Data"},offsetPositions:{first:"primo",fourth:"quarto",last:"ultimo",second:"secondo",third:"terzo"},weekly:{repeatEvery:"Ripeti ogni:",repeatOn:"Ripeti quando:",interval:"settimana(e)"},yearly:{of:"di",repeatEvery:"Ripeti ogni:",repeatOn:"Ripeti quando:",interval:"anno(i)",month:"mese",day:"giorno",date:"Data"},weekdays:{day:"giorno",weekday:"giorno della settimana",weekend:"giorno finesettimana"}})),kendo.ui.MobileRecurrenceEditor&&(kendo.ui.MobileRecurrenceEditor.prototype.options.messages=e.extend(!0,kendo.ui.MobileRecurrenceEditor.prototype.options.messages,kendo.ui.RecurrenceEditor.prototype.options.messages,{endTitle:"Fine ripetizione",repeatTitle:"Modello di ripetizione",headerTitle:"Ripeti appuntamento",end:{patterns:{never:"Mai",after:"Dopo...",on:"Il..."}},monthly:{repeatBy:"Ripeti per: ",dayOfMonth:"Data del mese",dayOfWeek:"Giorno della settimana",every:"Ogni"},yearly:{repeatBy:"Ripeti per: ",dayOfMonth:"Data del mese",dayOfWeek:"Giorno della settimana",every:"Ogni",month:"Mese",day:"Giorno"}})),kendo.ui.FilterCell&&(kendo.ui.FilterCell.prototype.options.messages=e.extend(!0,kendo.ui.FilterCell.prototype.options.messages,{clear:"Rimuovi",filter:"Filtro",isFalse:"è falso",isTrue:"è vero",operator:"Operatore"})),kendo.ui.FilterMenu&&(kendo.ui.FilterMenu.prototype.options.messages=e.extend(!0,kendo.ui.FilterMenu.prototype.options.messages,{and:"E",clear:"Rimuovi",filter:"Filtro",info:"Mostra elementi il cui valore:",title:"Mostra elementi il cui valore:",isFalse:"è falso",isTrue:"è vero",or:"O",selectValue:"-Seleziona valore-",cancel:"Annulla",operator:"Operatore",value:"Valore"})),kendo.ui.FilterMultiCheck&&(kendo.ui.FilterMultiCheck.prototype.options.messages=e.extend(!0,kendo.ui.FilterMultiCheck.prototype.options.messages,{search:"Cerca"})),kendo.ui.Grid&&(kendo.ui.Grid.prototype.options.messages=e.extend(!0,kendo.ui.Grid.prototype.options.messages,{commands:{canceledit:"Annulla",cancel:"Annulla modifiche",create:"Aggiungi nuovo elemento",destroy:"Rimuovi",edit:"Edit",excel:"Export to Excel",pdf:"Export to PDF",save:"Salva le modifiche",select:"Seleziona",update:"Aggiorna"},editable:{confirmation:"Sicuro di voler rimuovere questo elemento?",cancelDelete:"Annulla",confirmDelete:"Rimuovi"}})),kendo.ui.Groupable&&(kendo.ui.Groupable.prototype.options.messages=e.extend(!0,kendo.ui.Groupable.prototype.options.messages,{empty:"Trascina l'header di una colonna e rilascialo qui per raggruppare secondo tale colonna"})),kendo.ui.Pager&&(kendo.ui.Pager.prototype.options.messages=e.extend(!0,kendo.ui.Pager.prototype.options.messages,{allPages:"All",display:"{0} - {1} di {2} elementi",empty:"Nessun elemento da visualizzare",first:"Vai alla prima pagina",itemsPerPage:"elementi per pagina",last:"Vai all'ultima pagina",next:"Vai alla prossima pagina",of:"di {0}",page:"Pagina",previous:"Vai alla pagina precedente",refresh:"Aggiorna"})),kendo.ui.TreeListPager&&(kendo.ui.TreeListPager.prototype.options.messages=e.extend(!0,kendo.ui.TreeListPager.prototype.options.messages,{allPages:"All",display:"{0} - {1} di {2} elementi",empty:"Nessun elemento da visualizzare",first:"Vai alla prima pagina",itemsPerPage:"elementi per pagina",last:"Vai all'ultima pagina",next:"Vai alla prossima pagina",of:"di {0}",page:"Pagina",previous:"Vai alla pagina precedente",refresh:"Aggiorna"})),kendo.ui.Upload&&(kendo.ui.Upload.prototype.options.localization=e.extend(!0,kendo.ui.Upload.prototype.options.localization,{cancel:"Annulla",retry:"Riprova",select:"Seleziona...",remove:"Rimuovi",uploadSelectedFiles:"Upload dei file selezionati",dropFilesHere:"rilascia qui i file per l'upload",statusFailed:"fallito",statusUploaded:"upload effettuato",statusUploading:"upload in corso",headerStatusUploaded:"Fatto",headerStatusUploading:"Upload in corso..."})),kendo.ui.Editor&&(kendo.ui.Editor.prototype.options.messages=e.extend(!0,kendo.ui.Editor.prototype.options.messages,{bold:"Grassetto",createLink:"Inserisci hyperlink",fontName:"Seleziona una famiglia di font",fontNameInherit:"(font ereditato)",fontSize:"Seleziona la dimensione del font",fontSizeInherit:"(dimensione ereditata)",formatBlock:"Formatta blocco",indent:"Aumenta rientro",insertHtml:"Inserisci HTML",insertImage:"Inserisci immagine",insertOrderedList:"Inserisci lista ordinata",insertUnorderedList:"Inserisci lista non ordinata",italic:"Italic",justifyCenter:"Centra testo",justifyFull:"Giustifica testo",justifyLeft:"Allinea il testo a sinistra",justifyRight:"Allinea il testo a destra",outdent:"Riduci rientro",strikethrough:"Barrato",styles:"Stili",subscript:"A pedice",superscript:"In apice",underline:"Sottolineato",unlink:"Rimuovi hyperlink",deleteFile:'Sicuro di voler rimuovere "{0}"?',directoryNotFound:"Non è stata trovata alcuna directory con questo nome.",emptyFolder:"Cartella vuota",invalidFileType:'Il file selezionato "{0}" non è valido. I tipi di file supportati sono {1}.',orderBy:"Ordina per:",orderByName:"Nome",orderBySize:"Dimensione",overwriteFile:'\'Un file con nome "{0}" esiste già nella directory corrente. Vuoi sovrascriverlo?',uploadFile:"Upload",backColor:"Colore sfondo",foreColor:"Colore",dropFilesHere:"rilascia qui i files per l'upload",imageWebAddress:"Indirizzo Web",dialogButtonSeparator:"o",dialogCancel:"Annulla",dialogInsert:"Inserisci",imageAltText:"Testo alternativo",linkOpenInNewWindow:"Apri link in una nuova finestra",linkText:"Testo",linkToolTip:"ToolTip",linkWebAddress:"Indirizzo Web",search:"Cerca",createTable:"Crea tabella",addColumnLeft:"Aggiungi colonna a sinistra",addColumnRight:"Aggiungi colonna a destra",addRowAbove:"Aggiungi riga sopra",addRowBelow:"Aggiungi riga sotto",deleteColumn:"Rimuovi colonna",deleteRow:"Rimuovi riga",viewHtml:"Veda HTML",dialogUpdate:"Aggiorna",insertFile:"Inserisci file",insertFile1:"Inserisci file",print:"Stampa",borderNone:"Nessuno"})),kendo.ui.Scheduler&&(kendo.ui.Scheduler.prototype.options.messages=e.extend(!0,kendo.ui.Scheduler.prototype.options.messages,{allDay:"tutto il giorno",cancel:"Annulla",editable:{confirmation:"Sicuro di voler rimuovere questo evento?"},date:"Data",destroy:"Rimuovi",editor:{allDayEvent:"Giornata intera",description:"Descrizione",editorTitle:"Evento",end:"Fine",endTimezone:"Fuso orario finale",repeat:"Ripeti",separateTimezones:"Usa differenti fusi orari per l'inizio e la fine",start:"Inizio",startTimezone:"Fuso orario iniziale",timezone:"Modifica fuso orario",timezoneEditorButton:"Fuso orario",timezoneEditorTitle:"Fusi orari",title:"Titolo",noTimezone:"No timezone"},event:"Evento",recurrenceMessages:{deleteWindowOccurrence:"Rimuovi questa accorrenza",deleteWindowSeries:"Rimuovi la serie",deleteWindowTitle:"Rimuovi elemento ricorrente",editWindowOccurrence:"Modifica l'evento corrente",editWindowSeries:"Modifica la serie",editWindowTitle:"Modifica elemento ricorrente",deleteRecurring:"Vuoi rimuovere solo questo evento o la serie completa?",editRecurring:"Vuoi modifcare solo questo evento o la serie completa?"},save:"Salva",time:"Tempo",today:"Oggi",views:{agenda:"Agenda",day:"Giorno",month:"Mese",week:"Settimana",workWeek:"Settimana lavorativa"},deleteWindowTitle:"Rimuovi evento",showFullDay:"Mostra il giorno completo",showWorkDay:"Mostra solo le ore lavorative",search:"Cerca...",refresh:"Aggorna",selectView:"Seleziona vista"})),kendo.ui.Dialog&&(kendo.ui.Dialog.prototype.options.messages=e.extend(!0,kendo.ui.Dialog.prototype.options.localization,{close:"Vicino"})),kendo.ui.Alert&&(kendo.ui.Alert.prototype.options.messages=e.extend(!0,kendo.ui.Alert.prototype.options.localization,{okText:"OK"})),kendo.ui.Confirm&&(kendo.ui.Confirm.prototype.options.messages=e.extend(!0,kendo.ui.Confirm.prototype.options.localization,{okText:"OK",cancel:"Annulla"})),kendo.ui.Prompt&&(kendo.ui.Prompt.prototype.options.messages=e.extend(!0,kendo.ui.Prompt.prototype.options.localization,{okText:"OK",cancel:"Annulla"})),kendo.ui.List&&(kendo.ui.List.prototype.options.messages=e.extend(!0,kendo.ui.List.prototype.options.messages,{clear:"cancella",noData:"Nessun dato trovato."})),kendo.ui.DropDownList&&(kendo.ui.DropDownList.prototype.options.messages=e.extend(!0,kendo.ui.DropDownList.prototype.options.messages,kendo.ui.List.prototype.options.messages)),kendo.ui.ComboBox&&(kendo.ui.ComboBox.prototype.options.messages=e.extend(!0,kendo.ui.ComboBox.prototype.options.messages,kendo.ui.List.prototype.options.messages)),kendo.ui.AutoComplete&&(kendo.ui.AutoComplete.prototype.options.messages=e.extend(!0,kendo.ui.AutoComplete.prototype.options.messages,kendo.ui.List.prototype.options.messages)),kendo.ui.MultiColumnComboBox&&(kendo.ui.MultiColumnComboBox.prototype.options.messages=e.extend(!0,kendo.ui.MultiColumnComboBox.prototype.options.messages,kendo.ui.List.prototype.options.messages)),kendo.ui.DropDownTree&&(kendo.ui.DropDownTree.prototype.options.messages=e.extend(!0,kendo.ui.DropDownTree.prototype.options.messages,{singleTag:"opzione/i selezionata/e",clear:"cancelli",deleteTag:"rimuovi",noData:"Nessun dato trovato."})),kendo.ui.MultiSelect&&(kendo.ui.MultiSelect.prototype.options.messages=e.extend(!0,kendo.ui.MultiSelect.prototype.options.messages,{singleTag:"opzione/i selezionata/e",clear:"cancelli",deleteTag:"rimuovi",noData:"Nessun dato trovato.",downArrow:"seleziona"})),kendo.ui.Chat&&(kendo.ui.Chat.prototype.options.messages=e.extend(!0,kendo.ui.Chat.prototype.options.messages,{messageListLabel:"Lista di messaggi",placeholder:"Scrivi...",toggleButton:"Apri/chiudi barra degli strumenti",sendButton:"Invia messaggio"})),kendo.ui.Wizard&&(kendo.ui.Wizard.prototype.options.messages=e.extend(!0,kendo.ui.Wizard.prototype.options.messages,{reset:"Risetta",previous:"Precedente",next:"Prossimo",done:"Finito",step:"Passo",of:"di"})),kendo.ui.OrgChart&&(kendo.ui.OrgChart.prototype.options.messages=e.extend(!0,kendo.ui.OrgChart.prototype.options.messages,{label:"Org Chart",edit:"Modifica",create:"Crea",destroy:"Rimuovi",destroyContent:"Sei sicuro che vuoi rimovere questo articulo e i suoi figli?",destroyTitle:"Rimuovi articolo",cancel:"Anulla",save:"Salva",menuLabel:"Menu di modificazioni",uploadAvatar:"Carica un nuovo avatar",parent:"Genitore",name:"Nome",title:"Titolo",none:"--Nessun--",expand:"espanda",collapse:"crolla"}))}(window.kendo.jQuery);
//# sourceMappingURL=kendo.messages.it-CH.js.map
