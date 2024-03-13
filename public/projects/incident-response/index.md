
### The context of this project 🧑🏻‍💻

As part of my Google Cybersecurity Certificate, specifically within the Network Attacks Module, I was tasked with conducting an incident report.

The following document outlines my response strategy following a network attack within my organization.

<hr style="opacity:1;color:#341677">


### Ghost Company Incident Report 🧐

Amidst a typical workday at 'Ghost Company', I received an automated alert from our SIEM Tool, signaling an issue with the web server. Upon attempting to access the company website, I encountered a connection timeout error message in the browser.

Adhering to the company's security protocols, I promptly took the server offline temporarily to facilitate its recovery. Subsequently, I configured the company's firewall to block the IP address responsible for the abnormal influx of SYN requests. However, I acknowledged the temporary nature of this solution, given the potential for attackers to circumvent IP blocking through IP spoofing.

It's imperative to promptly inform my manager of this incident, outlining the observed anomalies and proposing a plan of action to thwart the attacker's efforts and prevent similar occurrences in the future.

<hr style="opacity:1;color:#341677">

First I need to **identify the type of attack that may have caused this network interruption 🤓**

Using Wireshark to capture data packets in transit to and from the web server:

## <a href ="https://docs.google.com/spreadsheets/d/1_MD7T5GCrzvyYnq1_PXUse-aB26lF34YUvNDrj0vg8U/edit?usp=sharing" style="text-decoration:underline;color:#164b77">This are the logs I got 👀 </a>

Based on the error message and Wireshark logs, indications point towards a potential DoS Attack. The presence of "timeout" suggests the server's inability to respond to incoming requests, exacerbated by a barrage of TCP SYN requests originating from the unfamiliar IP address "203.0.113.0".

<hr style="opacity:1;color:#341677">

## Now I need to explain how the attack is causing the website to malfunction and alert my manager 👍

Examination of the logs reveals that IP address "203.0.113.0" initiated a legitimate connection but subsequently bombarded the server with numerous SYN requests, overwhelming its resources.

Understanding the TCP/IP Protocol, we recognize the three-step process of establishing a connection:

<li>✅ A SYN packet is sent from the source to the destination, requesting to
connect.</li>
<li>✅ The destination replies to the source with a SYN-ACK packet to accept the connection request. The destination will reserve resources for the source to connect</li>
<li>✅ A final ACK packet is sent from the source to the destination acknowledging the permission to connect.</li>

The incessant sending of SYN packets, coupled with inadequate server resources or deficient DoS firewall configurations, can lead to service disruption, manifested by the "timeout" error message.


### My recommendations 🛠️

DoS attack take down one of the pillars of the CIA triad - Availability. This concerns the company's reputation and daily operations, so fixing this and future lookalike errors is crucial for good business continuity.

**The solutions I would propose are:**

✅ Setting the firewalls limit number of SYN packets per IP Address to a logical number can be one of the solutions.

✅ Setting an alert using our SIEM Tool to notice possible future SYN Attacks and block the IP Adresses for future alternative attacks.


### And voilà !

As I aspire to pursue a career as a Security Analyst, I am actively pursuing certifications to secure entry-level positions. This incident underscores the importance of proactive cybersecurity measures in safeguarding organizational assets and continuity.

Thank you for your attention to this report.

### Stay tuned for more updates!




