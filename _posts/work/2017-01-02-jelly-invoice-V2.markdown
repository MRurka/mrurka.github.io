---
layout:             post
title:              Jelly Invoice V2
subtitle:           My Freelance Tool
date:               2017-01-02
categories:         portfolio
take-me-back-text:  Can't code, damn. Take me back.
pathID:             Jelly_Invoice_2

port-id:            11ru
text-dark-light:    light
img-background:     background-jelly-2.jpg
---

<div className="image-container">
  <img className="clear" src=""/>
  <img className="w4" src="./img/work/jelly-2/Jelly-V2-Banner-Photo.jpg" alt="Jelly Invoice Version 2 Software on a Macbook, next to a paper invoice produced by Jelly version two"/>
</div>

<b>TL;DR</b>

Jelly Invoice is an admin tool I built for <s>freelancers</s> myself (sorry <a href="https://mahdif.com/" target="_blank">Mahdi</a>).
It's built with a blog-aware static site generator, <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>. It's like Wordpress but without server, database, and CMS GUI.
Jekyll even powers Github pages, so you know it's legit. Basically: instead of spitting blogs, Jelly spits invoices the same way.

<b>Why? Hated:</b>

- Placing a core part of my freelance business into the hands of cookie cutter third party services.
- Third party templates aren't 100% customizable
- Needing internet access every time I wanted to create an invoice, check finances, etc. Often working in cafes, co-working spaces, planes and trains.

<b>Proof of Concept</b>

I began building <a href="http://rurkadesign.com/jelly-invoice-website/" target="_blank">Jelly V1</a> in mid 2015, which accomplished:

- Invoices are created, stored and listed chronologically
- Charge hourly or fixed amounts
- Math and tax calculations are taken care of
- Store client details so you no longer have to type out billing addresses
- <b>Best of all:</b> I could design my invoices exactly how I wanted them to look

<div className="image-container">
  <img className="clear" src=""/>
  <img className="w4" src="./img/work/jelly-2/Jelly-V1-UX-Preview-1.gif" alt="Functionality Preview of Jelly Invoice version one"/>
</div>

<b>Where Jelly Fell Short</b>

Honest, I never used Jelly V1 to invoice any clients. Immediately realized I needed much more if I was to make it in the freelance biz.

- I needed the ability to create proposals, contracts, have them signed, and issue invoices and receipts upon project completion. Huge wish, but we made it happen, fam.
- On top of all that, I wanted all these documents neatly stored together.
- And finally, I needed support for multiple tax rates since I worked with a few friends across provinces. In Canada, you gotta tax your clients based on their provincial tax rates. Tax labels are also customizable due to various tax types: GST, HST and/or PST. Tax can even be left completely empty since you <s>can't</s> shouldn't tax international clients.

<b>[Enter Jelly V2]</b>

<div className="image-container">
  <img className="clear" src=""/>
  <img className="w4" src="./img/work/jelly-2/Jelly-V2-UX-Preview-1.gif" alt="Functionality Preview of Jelly Invoice version two"/>
</div>

<b>Main Upgrades</b>

- Same table view, but with yearly subtotals, tax totals &amp; grand totals. Bonus: you can print out this view for tax season (amen).
- Hourly based invoices have been dropped for personal reasons
- Images of signed contract can replace the signature page at the flick of a boolean.

<b>State: Proposal/Contract</b>

Put the signed contract JPG in the `_signatures` folder, name it the corresponding Project ID and the last (signature) page will be replaced.

<div className="image-container">
  <img className="clear" src=""/>
  <img className="w4" src="./img/work/jelly-2/Jelly-V2-signature-preview.jpg" alt="Preview of Jelly signed contracts."/>
</div>

<b>State: Invoice/Receipt</b>

When it's time to rain, flick some switches and your first page is now the invoice page. Flick another and your signature magically appears.

<div className="image-container">
  <img className="clear" src=""/>
  <img className="w4" src="./img/work/jelly-2/Jelly-V2-invoice-preview.jpg" alt="Preview of Jelly Invoices."/>
</div>

<b>How?</b>

Here's what creating a proposal/invoice/receipt bundle looks like.
The various stages in any project is controlled by a series of booleans.

<figure>
  <pre>
    <code>
    --- <br/>
    <br/>
    layout: default <br/>
    tags:   "2017"<br/>
    <br/>
    ## Project Details<br/>
    ## <br/>
    title:                "Icon Pack Design"<br/>
    date:                 2015-09-26<br/>
    client-id:            intercom<br/>
    project-id:           INTE-001<br/>
    project-task:         Rebranding Services<br/>
    rush-fee:             yes<br/>
    tax:                  0.13<br/>
    tax-label:            HST<br/>
    <br/>
    ## Cost Breakdown<br/>
    ## <br/>
    holding-deposit:      500<br/>
    holding-date:         2015-10-1<br/>
    holding-note:         Via E-Transfer<br/>
    <br/>
    starting-deposit:     800<br/>
    starting-date:        2015-10-30<br/>
    starting-note:        Via E-Transfer <br/>
    <br/>
    progress-deposit:     800<br/>
    progress-date:        2015-11-25<br/>
    progress-note:        Via E-Transfer<br/>
    <br/>
    final-deposit:        800<br/>
    final-date:           2015-12-10<br/>
    final-note:           Via E-Transfer<br/>
    <br/>
    estimate-total:       2900<br/>
    currency:             USD<br/>
    <br/>
    ## AFTER Proposal<br/>
    ## <br/>
    contract-signed:      no<br/>
    <br/>
    ## IF Invoice<br/>
    ## <br/>
    invoice-paid:         no<br/>
    payment-date:         2015-12-20<br/>
    <br/>
    ## Items<br/>
    ## <br/>
    item_1:               Website Design<br/>
    price_1:              5000<br/>
    <br/>
    item_2:               Business Card Design<br/>
    price_2:              1000<br/>
    <br/>
    item_3:               Printing Expenses<br/>
    price_3:              367.33<br/>
    <br/>
    ## States<br/>
    invoice-paid:         no<br/>
    payment-date:         2015-12-20<br/>
    receipt-ready:        no<br/>
    <br/>
    ## Once Complete<br/>
    ## <br/>
    revenue:              2900<br/>
    hours:                40<br/>
    date-end:             2015-12-08<br/>
    <br/>
    --- <br/>
    <br/>
    ## Project Scope<br/>
    <br/>
    Project details go Here. Markdown supported.<br/>
    <br/>
    </code>
  </pre>
</figure>
<br/>

<b>Client Profiles:</b>

Jekyll data files store unique, but repetitive information so for our client Steve Jobs, we simply have a file named `apple.yml` in the `_data` folder which looks like this:

<figure>
  <pre>
    <code>
      client-id: apple   <br/>
      client-name: Apple Inc.  <br/>
      client-billing: "Steve Jobs&#60;br>Apple Inc.&#60;br>‎1 Infinite Loop&#60;br>Cupertino, CA 95014" <br/>
    </code>
  </pre>
</figure>

<b>Reflections</b>

So that's Jelly in a nutshell.

Many thanks to my good bros <a href="https://www.linkedin.com/in/koltongagnon" target="_blank">Kolton</a>, <a href="https://mahdif.com/" target="_blank">Mahdi</a>, <a href="https://www.linkedin.com/in/alexleclair" target="_blank">Alex</a> and <a href="https://www.linkedin.com/in/philip-rurka-447194127" target="_blank">Def</a> for feedback and support.

What's most interesting is that Jelly grew and evolved – and continues to evolve – along side me in this journey.
You know, we were terribly naive when we first started out. Especially in the business realm.
But nonetheless, we adapted to challenges, ineficiencies, and things we straight up didn't know we'd ever need or even have to care about.

We'll only keep growing strong.

Thanks Jelly,

-mr
