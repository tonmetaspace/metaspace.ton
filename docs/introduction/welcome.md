---
id: welcome
title: Welcome to Metaspace
sidebar_label: Welcome
---

# Welcome

Metaspace is a virtual collaboration platform that runs in your browser. With Metaspace you can create your own 3D spaces with a single click. Invite others to join using a URL. No installation or app store required.

```mermaid
    C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
    A-->D;
    B-->A;
```

```mermaid
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
```

```mermaid
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Who is Metaspace for?

Metaspace is for anyone who wants to connect with others remotely! It's a great way to bring communities together in a shared virtual space.

Host a conference, teach a class, showcase art, or just hang out with friends. Metaspace makes it easy to connect and share images, videos, 3D models, and more. With Metaspace spatialized audio you can have conversations with everyone together or break out into smaller groups just like you can in person.

Metaspace works across platforms. Got a VR headset? Awesome! If not, you can use your desktop computer, laptop, tablet, or mobile devices to explore in 2D

## Customizing Metaspace

Metaspace is open source and customizable. Upload or create unique environments using .

Want more control over your Metaspace interface? You can self-host your own version of the platform usin. Add custom branding, use your own domain name, limit access to approved users, and build your own features and functionality.

### What is Buidl?

is the built-in scene editor for creating environments that can be used in Metaspace. The editor runs entirely in the browser and allows you to upload your own 3D models, images, and files to use in your projects. Buidl also contains building kits and integrations with content providers to help you build the perfect space!
