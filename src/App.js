import ExpenseItem from './components/Expenseitem';
function App() {
  const para = document.createElement('p');
  para.textContent = "This is regular javascript";
  document.getElementById('root').append(para);
  
  return (
    <div>
      <h1>Learning React! </h1>
      <h2>Let's get started! with react</h2>
      <p>This is paragraph</p>
      <p>To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to #1153. You can control the 10,000 byte threshold by setting the IMAGE_INLINE_SIZE_LIMIT environment variable as documented in our advanced configuration.</p>
      
      <ExpenseItem></ExpenseItem>
      
    </div>
  );
}

export default App;
