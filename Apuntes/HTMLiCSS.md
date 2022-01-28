<center> 

# CONTINGUTS EXAMEN TEÒRIC 

</center>

### **Definició i classificació dels llenguatges de marques. Les marques.**

Llenguatge de marques:
- Els **llenguatges de marques** o llenguatges de marcat són aquells que combinen en un document la informació (generalment de text) amb marques o anotacions relatives a l'estructura del text

Les marques:
- Les **marques** són una sèrie de codis que s'incroporen als docuements electrònics per determinar-ne el format, la manera com s'han d'imprimir, l'estrucutra de dates... Per tant, són anotacions que s'incorporen a les dades i es representen amb `<` i `>`.
    ![](https://i.imgur.com/JqQqN9i.png?1)

Classificació dels llenguatges:
- **Llenguatges descriptius o semàntics**, que estan orientats a descriure la lògica de les dates que contenen (XML)
- **Llenguatges procedimentals i de presentació**, que estan orientats a especificar com s'ha de representar l'informació (HTML).
---
### **Nom de les dues Organitzacions desenvolupadores.**

- **Organización Internacional para la Estandarización (ISO)**, és l'organisme que té com a funció cercar i definir l'estandarització de normes a nivell internacional. En 1986 va publicar SGML.

- **Consorcio World Wide Web (W3C)**, té com a funció tutelar el creixament i organització de la web. Va normalitzar HTML i la creació de normes per a que tothom pugui utilitzar el llenguatge de marques segons la seva necessitat però seguint unes normes bàsiques (XML)
---
### **Etiquetes, elements i atributs dels llenguatges de marques. Que són? Exemples.**

- **Elements**: representen estructures mitjançant les quals s'organitzarà el contingut del document o accions que es duen a terme quan el navegador interpreta el document. Existeix l'etiqueta d'inici, l'etiqueta de cap i totes les que es troben entre les dues. Existeixen elements que no tenen contingut, i se'ls denomina elements buits.

- **Etiqueta o tag**: és un text que indica al visualitzador de quins tipus és el fragment. Va entre '<' i '>'. Existeixen etiquetes d'inici i de fi.

- **Atribut**: és un parell nom-valor que es troba dins l'etiqueta d'inici d'un element i indiquen les propietats que poden portar associades els elements.
![](https://i.imgur.com/d86pPpO.png?1)
--- 
### **Elements en línia i elements en bloc de HTML. Diferències.**
- **Element en línea**: és aquell que ocupa el mínim espai necessari en horitzontal. Els elements en línea són:
![](https://i.imgur.com/3FtjWmt.png?1)

- **Element en bloc**: és aquell que s'inicia sempre en una nova línea i s'amplia tota l'amplada disponible (s'estén d'esquerra a dreta fins a la mesura possible). En trobam: 
![](https://i.imgur.com/UwBJmbY.png?1) 
<center>

(*Saber més o menys de quin tipus es cada una*)

</center>

---

### **Estructura d'un document HTML (html, head, body). Ordre dels elements i perquè serveixen.**
- L'etiqueta `<!DOCTYPE html>` representa el tipus de document i ajuda als navegadors a mostar correctament les pàgines web.

- L'element `<html>...</html>` és obligatori, i serveix per identificar que el document està escrit amb HTML i tambè, per delimitar l'inici i el fi d'aquest.

- El segon element és el `<head>...</head>`, que és la capçalera. Aquesta capçalera és un contenidor amb metadades per al document, com per exemple, l'autor, el títol(*title*), descripció o paraules clau del docuement... Aquestes dades no són visibles a la pàgina, però són utilitzades per els navegadors per trobar informació útil per entendre i processar el document.

- El tercer element és el `<body>...</body>`. Aquest element és el cos del document, és a dir, on col·locarem el nostre text i imatges, delimitats per altres etiquetes.
![](https://i.imgur.com/HLtljHb.png?1)

---
### **Com s'insereixen els comentaris a HTML i a CSS.**
Els comentaris no apareixen a la pàgina web, nomès al codi i serveixen per depurar l'arxiu.
- Els comentaris a HTML :
```bash
 <!--Comentari-->
```
- Els comentaris a CSS :
```bash
/* Comentari */
```
---
### **Sintaxi d’un CSS.**
La sintaxi d'un document CSS està formada per selectors i declaracions.
- Els **selectors** ens serveix per definir a quin o quins elements del document volem modificar.
- Una **declaració** consisteix en l'asignació de un valor a una propietat. Es troba entremitges de `{` i `}`.
![](https://i.imgur.com/sqbtaPO.png?1)
---
### **Tipus de selectors (etiqueta, classes, ids, combinadors, pseudoclasses, pseudoelements.)**

- Els **selectors d'etiqueta** seleccionen tots els elements d'on comença l'etiqueta triada, fins al fi de l'etiqueta. Per utilitzar-la només és necessari inidcar el nom de l'etiqueta HTML.
```bash
h1{
    color: red;
}
```
- Els **selectors de classes** s'utilitzen quan volem que alguns elements amb la mateixa etiqueta a la qual ja s'ha donat un estil, tengui un altre.
![](https://i.imgur.com/ALEvs1v.png?1)

- Els **selectors Id** són selectors utilitzats per seleccionar un únic element de la pàgina. Es podria utilitzar un selector de classe, però per un element, els Id són més eficients, ja que seleccionen el valor de l'atribut id, i, no poden haver-hi dos iguals. La sintaxi és igual que als selectors de classe, però canviant el `'.'` per `'#'`.
```bash
h2'#'vermell-negreta{

    color: red;
}
```
- Els **selectors combinadors** són tres:

- - **Combinador de germans adjacents (+)** : selecciona germans adjacents, és a dir, que el segon element ha de seguir directament al primer i tots dos tenen el mateix element pare.
```bash
 Element-germà + Element-germà directe o contigu
```
![](https://i.imgur.com/MR92OrR.png?1)

- - **Combinador general de germans (~)**: selecciona germans, és a dir, que el segon element segueix al primer (no necessàriament de forma immediata), i els dos tenen el mateix pare.
```bash
 Element-germà ~ Element-germà
```
![](https://i.imgur.com/04eENtw.png?1)

- - **Combinador de fills (>)**: selecciona els elements que són fills directes del primer element.
```bash
 Element-pare > Element-fill-directe
```
![](https://i.imgur.com/2FHuwdw.png?1)

- Les **pseudo-classes** permeten seleccionar elements segons un estat específic o segons la seva posició al document. Actuen com si haguessis aplicat una classe en una part determinada del document i proporcionen un marcat més flexible i fàcil de mantenir.
```bash
 :nom de la pseudo-classe
```
![](https://i.imgur.com/5VMug88.png?1)
*Ejemplo: La etiqueta en línea `<a>`, tiene las pseudo-classes :active, :hover, :link, :visited...*

- Els **pseudo-elements** són similars a les pseudo-classes, però es diferencien en que els pseudoelements solen fer referència a determinades parts d'un element, nomès poden apareixer al final del selector i començen amb doble dobles punts.
```bash
 ::nom del pseudo-element
```
---
### **Caixes. Tipus de posicionaments, propietats més importants per ubicar-les correctament.**

Els elements en HTML s'organitzen elements en bloc i en línea. La propietat *display* permet modificar-los:
- El **display block** té el comportament d'un element en bloc. No accepta cap element a n'es seu costat. 
![](https://i.imgur.com/8jiEDgB.png)

- El **display inline** és un element que es col·loca en línea a n'es costat d'un altre.
![](https://i.imgur.com/vdbgYZc.png)

- El **display none** s'utilitza per ocultar l'element.

#### **Posicionament de les caixes**

- **Position: static**, els elements es situen en el fluxe normal de la pàgina, nomès té en compte els elements de línea y els de bloc. No té en compte les propietats bottom, left, right y top.

- **Position: relative**, el desplaçament de les caixes es fa a partir de la seva posició original, no modifica als elements del costat però amb les propietats bottom, left, right y top, pot solapar-los.

- **Position: absolute**, s'utilitza per, de forma precisa, establir la posició on volem l'element. Les propietats bottom, left, right y top, mouen la caixa cap a l'interior sempre i quan el valor sigui positiu. 

- **Position: fixed**, els elements amb aquesta propietat són fixes.
![](https://i.imgur.com/0KfUBbX.png)
#### **Propietats per al posicionament**
- **Margin, margin-bottom, margin-left, margin-right y margin-top**, marge exterior que separa la caixa dels altres elements.

- **Padding, padding-bottom, padding-left, padding-right y padding-top**, marge interior que separa els elements de la caixa.

- **Bottom, left, right y top**, utilitzat per establir l'ubicació de la caixa.

- **Propietat float**, l'element surt del fluxe de la pàgina i es col·loca a l'esquerra o a la dreta del seu contenidor.