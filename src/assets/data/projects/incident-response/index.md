
### The context of this project 🧑🏻‍💻

As part of my current Google Cybersecurity Certificate; inside the Network Attacks Module I was instructed to conduct an incident report.

The following document is a representation of how i would respond following a network attack of this kind inside my organisation.

<hr style="opacity:1;color:#341677">


### Ghost Company Incident Report 🧐

I'm working on a normal day at Ghost Company, suddenly I receive an automated alert from our SIEM Tool indicating a problem with the web server. I attempte to visit the company’s website, but I receive a connection timeout error message in the browser.

**Following the company's security protocols**, I take the server offline temporarily so that the machine can recover and return to a normal operating status. I follow to configure the company’s firewall to block the IP address that was sending the abnormal number of SYN requests. I know that this IP blocking solution **won’t last long**, as an attacker can spoof other IP addresses to get around this block.

I need to alert my manager about this problem quickly and discuss the next steps to stop this attacker and prevent this problem from happening again. I will also need to be prepared to tell my boss about the type of attack I discovered and how it was affecting the web server and employees.

<hr style="opacity:1;color:#341677">

## First I need to **identify the type of attack that may have caused this network interruption 🤓**

Using Wireshark to capture data packets in transit to and from the web server:

## <a href ="https://docs.google.com/spreadsheets/d/1_MD7T5GCrzvyYnq1_PXUse-aB26lF34YUvNDrj0vg8U/edit?usp=sharing" style="text-decoration:underline;color:#341677">This are the logs I got 👀 </a>

Taking into account the error message, I can start to think about a **DoS Attack**, the word **timeout** suggests that the test request we made was waiting for a response but the server couldn't.

Reading the logs from Wireshark, I instantly notice a large number of **TCP SYN requests** coming from an unfamiliar IP address **203.0.113.0**. The web server appears to be overwhelmed by the volume of incoming traffic and is losing its ability to respond to the abnormally large number of SYN requests. I strongly suspect the server is under attack by a malicious actor.

<hr style="opacity:1;color:#341677">

## Now I need to explain how the attack is causing the website to malfunction and alert my manager 👍

We can see from the logs that the IP Address **203.0.113.0** started making a real connection at the time: **3.390692**. It completed the handshake but then, it started making tons of SYN requests.

**Knowing the TCP/IP Protocol**, we know that to form a connection between two devices, there are three steps.
<ol>
<li>✅ A SYN packet is sent from the source to the destination, requesting to
connect.</li>
<li>✅ The destination replies to the source with a SYN-ACK packet to accept the connection request. The destination will reserve resources for the source to connect</li>
<li>✅ A final ACK packet is sent from the source to the destination acknowledging the permission to connect.</li>
</ol>

So the multiple sending of SYN Packets the server not having enough resources or a correct DoS firewall set up, can cause the server to collapse and not be able to serve all the other requests made by other users and consequently throwing the **timeout error message**.


### My recommendations 🛠️

DoS attack take down one of the pillars of the CIA triad - Availability. This concerns the company's reputation and daily operations, so fixing this and future lookalike errors is crucial for good business continuity.

**The solutions I would propose are:**

✅ Setting the firewalls limit number of SYN packets per IP Address to a logical number can be one of the solutions.

✅ Setting an alert using our SIEM Tool to notice possible future SYN Attacks and block the IP Adresses for future alternative attacks.


## And voilà !

As my current career objective is to become a Security Analyst, I'm following this certificate to land an entry-level position in the near future. Thank you for reading this article


## More projects to come!
