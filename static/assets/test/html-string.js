module.exports = `<div class="col-md-7 middle-col">

<p>A variable provides us with named storage that our programs can manipulate. Each variable in Java has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.</p>
<p>You must declare all variables before they can be used. Following is the basic form of a variable declaration −</p>
<pre class="result notranslate">data type variable [ = value][, variable [ = value] ...] ;
</pre>
<p>Here <i>data type</i> is one of Java's datatypes and <i>variable</i> is the name of the variable. To declare more than one variable of the specified type, you can use a comma-separated list.</p>
<p>Following are valid examples of variable declaration and initialization in Java −</p>
<h2>Example</h2>
<pre class="prettyprint notranslate prettyprinted"><span class="kwd">int</span><span class="pln"> a</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">;</span><span class="pln">         </span><span class="com">// Declares three ints, a, b, and c.</span><span class="pln">
</span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln">  </span><span class="com">// Example of initialization</span><span class="pln">
</span><span class="kwd">byte</span><span class="pln"> B </span><span class="pun">=</span><span class="pln"> </span><span class="lit">22</span><span class="pun">;</span><span class="pln">         </span><span class="com">// initializes a byte type variable B.</span><span class="pln">
</span><span class="kwd">double</span><span class="pln"> pi </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3.14159</span><span class="pun">;</span><span class="pln"> </span><span class="com">// declares and assigns a value of PI.</span><span class="pln">
</span><span class="kwd">char</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="str">'a'</span><span class="pun">;</span><span class="pln">        </span><span class="com">// the char variable a iis initialized with value 'a'</span></pre>
<p>This chapter will explain various variable types available in Java Language. There are three kinds of variables in Java −</p>
<ul class="list">
<li>Local variables</li>
<li>Instance variables</li>
<li>Class/Static variables</li>
</ul>
<h2>Local Variables</h2>
<ul class="list">
<li><p>Local variables are declared in methods, constructors, or blocks.</p></li>
<li><p>Local variables are created when the method, constructor or block is entered and the variable will be destroyed once it exits the method, constructor, or block.</p></li>
<li><p>Access modifiers cannot be used for local variables.</p></li>
<li><p>Local variables are visible only within the declared method, constructor, or block.</p></li>
<li><p>Local variables are implemented at stack level internally.</p></li>
<li><p>There is no default value for local variables, so local variables should be declared and an initial value should be assigned before the first use.</p></li>
</ul>
<h3>Example</h3>
<p>Here, <i>age</i> is a local variable. This is defined inside <i>pupAge()</i> method and its scope is limited to only this method.</p>
<pre class="prettyprint notranslate tryit prettyprinted" style="cursor: default;"><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Test</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> pupAge</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">int</span><span class="pln"> age </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
      age </span><span class="pun">=</span><span class="pln"> age </span><span class="pun">+</span><span class="pln"> </span><span class="lit">7</span><span class="pun">;</span><span class="pln">
      </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"Puppy age is : "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> age</span><span class="pun">);</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">

   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pln"> args</span><span class="pun">[])</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="typ">Test</span><span class="pln"> test </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Test</span><span class="pun">();</span><span class="pln">
      test</span><span class="pun">.</span><span class="pln">pupAge</span><span class="pun">();</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>This will produce the following result −</p>
<h3>Output</h3>
<pre class="result notranslate">Puppy age is: 7
</pre>
<h3>Example</h3>
<p>Following example uses <i>age</i> without initializing it, so it would give an error at the time of compilation.</p>
<pre class="prettyprint notranslate tryit prettyprinted"><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Test</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> pupAge</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">int</span><span class="pln"> age</span><span class="pun">;</span><span class="pln">
      age </span><span class="pun">=</span><span class="pln"> age </span><span class="pun">+</span><span class="pln"> </span><span class="lit">7</span><span class="pun">;</span><span class="pln">
      </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"Puppy age is : "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> age</span><span class="pun">);</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">

   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pln"> args</span><span class="pun">[])</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="typ">Test</span><span class="pln"> test </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Test</span><span class="pun">();</span><span class="pln">
      test</span><span class="pun">.</span><span class="pln">pupAge</span><span class="pun">();</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>This will produce the following error while compiling it −</p>
<h3>Output</h3>
<pre class="result notranslate">Test.java:4:variable number might not have been initialized
age = age + 7;
        ^
1 error
</pre>
<h2>Instance Variables</h2>
<ul class="list">
<li><p>Instance variables are declared in a class, but outside a method, constructor or any block.</p></li>
<li><p>When a space is allocated for an object in the heap, a slot for each instance variable value is created.</p></li>
<li><p>Instance variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed.</p></li>
<li><p>Instance variables hold values that must be referenced by more than one method, constructor or block, or essential parts of an object's state that must be present throughout the class.</p></li>
<li><p>Instance variables can be declared in class level before or after use.</p></li>
<li><p>Access modifiers can be given for instance variables.</p></li>
<li><p>The instance variables are visible for all methods, constructors and block in the class. Normally, it is recommended to make these variables private (access level). However, visibility for subclasses can be given for these variables with the use of access modifiers.</p></li>
<li><p>Instance variables have default values. For numbers, the default value is 0, for Booleans it is false, and for object references it is null. Values can be assigned during the declaration or within the constructor.</p></li>
<li><p>Instance variables can be accessed directly by calling the variable name inside the class. However, within static methods (when instance variables are given accessibility), they should be called using the fully qualified name. <i>ObjectReference.VariableName</i>.</p></li>
</ul>
<h3>Example</h3>
<pre class="prettyprint notranslate tryit prettyprinted"><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">io</span><span class="pun">.*;</span><span class="pln">
</span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Employee</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

   </span><span class="com">// this instance variable is visible for any child class.</span><span class="pln">
   </span><span class="kwd">public</span><span class="pln"> </span><span class="typ">String</span><span class="pln"> name</span><span class="pun">;</span><span class="pln">

   </span><span class="com">// salary  variable is visible in Employee class only.</span><span class="pln">
   </span><span class="kwd">private</span><span class="pln"> </span><span class="kwd">double</span><span class="pln"> salary</span><span class="pun">;</span><span class="pln">

   </span><span class="com">// The name variable is assigned in the constructor.</span><span class="pln">
   </span><span class="kwd">public</span><span class="pln"> </span><span class="typ">Employee</span><span class="pln"> </span><span class="pun">(</span><span class="typ">String</span><span class="pln"> empName</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      name </span><span class="pun">=</span><span class="pln"> empName</span><span class="pun">;</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">

   </span><span class="com">// The salary variable is assigned a value.</span><span class="pln">
   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> setSalary</span><span class="pun">(</span><span class="kwd">double</span><span class="pln"> empSal</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      salary </span><span class="pun">=</span><span class="pln"> empSal</span><span class="pun">;</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">

   </span><span class="com">// This method prints the employee details.</span><span class="pln">
   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> printEmp</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"name  : "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> name </span><span class="pun">);</span><span class="pln">
      </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"salary :"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> salary</span><span class="pun">);</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">

   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pln"> args</span><span class="pun">[])</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="typ">Employee</span><span class="pln"> empOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Employee</span><span class="pun">(</span><span class="str">"Ransika"</span><span class="pun">);</span><span class="pln">
      empOne</span><span class="pun">.</span><span class="pln">setSalary</span><span class="pun">(</span><span class="lit">1000</span><span class="pun">);</span><span class="pln">
      empOne</span><span class="pun">.</span><span class="pln">printEmp</span><span class="pun">();</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>This will produce the following result −</p>
<h3>Output</h3>
<pre class="result notranslate">name  : Ransika
salary :1000.0
</pre>
<h2>Class/Static Variables</h2>
<ul class="list">
<li><p>Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block.</p></li>
<li><p>There would only be one copy of each class variable per class, regardless of how many objects are created from it.</p></li>
<li><p>Static variables are rarely used other than being declared as constants. Constants are variables that are declared as public/private, final, and static. Constant variables never change from their initial value.</p></li>
<li><p>Static variables are stored in the static memory. It is rare to use static variables other than declared final and used as either public or private constants.</p></li>
<li><p>Static variables are created when the program starts and destroyed when the program stops.</p></li>
<li><p>Visibility is similar to instance variables. However, most static variables are declared public since they must be available for users of the class.</p></li>
<li><p>Default values are same as instance variables. For numbers, the default value is 0; for Booleans, it is false; and for object references, it is null. Values can be assigned during the declaration or within the constructor. Additionally, values can be assigned in special static initializer blocks.</p></li>
<li><p>Static variables can be accessed by calling with the class name <i>ClassName.VariableName</i>.</p></li>
<li><p>When declaring class variables as public static final, then variable names (constants) are all in upper case. If the static variables are not public and final, the naming syntax is the same as instance and local variables.</p></li>
</ul>
<h3>Example</h3>
<pre class="prettyprint notranslate tryit prettyprinted"><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">io</span><span class="pun">.*;</span><span class="pln">
</span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Employee</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

   </span><span class="com">// salary  variable is a private static variable</span><span class="pln">
   </span><span class="kwd">private</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">double</span><span class="pln"> salary</span><span class="pun">;</span><span class="pln">

   </span><span class="com">// DEPARTMENT is a constant</span><span class="pln">
   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">final</span><span class="pln"> </span><span class="typ">String</span><span class="pln"> DEPARTMENT </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Development "</span><span class="pun">;</span><span class="pln">

   </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pln"> args</span><span class="pun">[])</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      salary </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">;</span><span class="pln">
      </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="pln">DEPARTMENT </span><span class="pun">+</span><span class="pln"> </span><span class="str">"average salary:"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> salary</span><span class="pun">);</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>This will produce the following result −</p>
<h3>Output</h3>
<pre class="result notranslate">Development average salary:1000
</pre>
<p><b>Note</b> − If the variables are accessed from an outside class, the constant should be accessed as Employee.DEPARTMENT</p>
</div>`