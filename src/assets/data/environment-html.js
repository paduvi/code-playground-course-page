/**
 * Created by Cho To Xau Tinh on 07-Oct-16.
 */
module.exports = `<div class="col-md-7 middle-col">
<h1>Java - Environment Setup</h1>
<p>In this chapter, we will discuss on the different aspects of setting up a congenial environment for Java.</p>
<blockquote>
<h2>Try it Option Online</h2>
<p>We have set up the Java Programming environment online, so that you can compile and execute all the available examples online. It gives you confidence in what you are reading and enables you to verify the programs with different options. Feel free to modify any example and execute it online.</p>
<p>Try the following example using our online compiler available at <a href="https://www.tutorialspoint.com/codingground.htm">CodingGround</a></p>
<pre class="prettyprint notranslate tryit prettyprinted" style="cursor: default;"><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">MyFirstJavaProgram</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pln"> </span><span class="pun">[]</span><span class="pln">args</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"Hello World"</span><span class="pun">);</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln"> </span></pre>
<p>For most of the examples given in this tutorial, you will find a Try it option in our website code sections at the top right corner that will take you to the online compiler. So just make use of it and enjoy your learning.</p>
</blockquote>
<h2>Local Environment Setup</h2>
<p>If you are still willing to set up your environment for Java programming language, then this section guides you on how to download and set up Java on your machine. Following are the steps to set up the environment.</p>
<p>Java SE is freely available from the link <a rel="nofollow" target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Download Java</a>. You can download a version based on your operating system.</p>
<p>Follow the instructions to download Java and run the <b>.exe</b> to install Java on your machine. Once you installed Java on your machine, you will need to set environment variables to point to correct installation directories −</p>
<h3>Setting Up the Path for Windows</h3>
<p>Assuming you have installed Java in <i>c:\Program Files\java\jdk</i> directory −</p>
<ul class="list">
<li><p>Right-click on 'My Computer' and select 'Properties'.</p></li>
<li><p>Click the 'Environment variables' button under the 'Advanced' tab.</p></li>
<li><p>Now, alter the 'Path' variable so that it also contains the path to the Java executable. Example, if the path is currently set to 'C:\WINDOWS\SYSTEM32', then change your path to read 'C:\WINDOWS\SYSTEM32;c:\Program Files\java\jdk\bin'.</p></li>
</ul>
<h3>Setting Up the Path for Linux, UNIX, Solaris, FreeBSD</h3>
<p>Environment variable PATH should be set to point to where the Java binaries have been installed. Refer to your shell documentation, if you have trouble doing this.</p>
<p>Example, if you use <i>bash</i> as your shell, then you would add the following line to the end of your '.bashrc: export PATH = /path/to/java:$PATH'</p>
<h2>Popular Java Editors</h2>
<p>To write your Java programs, you will need a text editor. There are even more sophisticated IDEs available in the market. But for now, you can consider one of the following −</p>
<ul class="list">
<li><p><b>Notepad</b> − On Windows machine, you can use any simple text editor like Notepad (Recommended for this tutorial), TextPad.</p></li>
<li><p><b>Netbeans</b> − A Java IDE that is open-source and free which can be downloaded from <a target="_blank" rel="nofollow" href="https://www.netbeans.org/index.html">https://www.netbeans.org/index.html</a>.</p></li>
<li><p><b>Eclipse</b> − A Java IDE developed by the eclipse open-source community and can be downloaded from <a target="_blank" rel="nofollow" href="https://www.eclipse.org/">https://www.eclipse.org/</a>.</p></li>
</ul>
<h2>What is Next?</h2>
<p>Next chapter will teach you how to write and run your first Java program and some of the important basic syntaxes in Java needed for developing applications.</p>
</div>`