import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle( 'Blog' )
    return (
        <div className='mx-auto mt-24'>
            <h2 className='md:text-5xl sm:text-3xl text-2xl text-blue-900 my-12 '>There are some important notes, which is beneficial for you.</h2>
            <div className="my-4 p-4 bg-cyan-300 text-left rounded-lg">
                <h3 className='text-2xl mb-2'>Difference between SQL and NoSQL</h3>
                <h1 className='text-lg mb-2'>The Main Differences: </h1>
                <p><b>1. Type </b> <br />
                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                </p>
                <p><b>2. Language  </b> <br />
                    SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. <br /> A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
                </p>
                <p><b>3. Scalability   </b> <br />
                    In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.
                </p>
                <p><b>3. Structure    </b> <br />
                    SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.
                </p>
            </div>
            <div className="my-4 p-4 bg-cyan-200 text-left rounded-lg">
                <h3 className='text-2xl mb-2'>How does context API work?</h3>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </p>
            </div>
            <div className="my-4 p-4 bg-cyan-300 text-left rounded-lg">
                <h3 className='text-2xl mb-2'>What is the difference between javascript and NodeJS?</h3>
                <p><b>1 </b> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                <p><b>2 </b> 	Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.</p>
                <p><b>3 </b> Javascript is capable enough to add HTML and play with the DOM.
                    Nodejs does not have capability to add HTML tags.</p>
                <p><b>4 </b> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    V8 is the Javascript engine inside of node.js that parses and runs Javascript.</p>
                <p><b>5 </b> 	Javascript is used in frontend development.Nodejs is used in server-side development.</p>
            </div>
            <div className="my-4 p-4 bg-cyan-200 text-left rounded-lg">
                <h3 className='text-2xl mb-2'>How does NodeJS handle multiple requests at the same time?</h3>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself.But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. </p>
            </div>
        </div>
    );
};

export default Blog;
