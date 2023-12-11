document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Collect form data
      const formData = new FormData(form);
      const noun = formData.get('noun');
      const adjective = formData.get('adjective');
      const verb = formData.get('verb');
      const place = formData.get('place');
      const color = formData.get('color');
  
      // Combine form data into a Mad Lib string
      const madLib = `Once upon a time, a ${adjective} ${noun} was adopted by a loving family. The warm home and treats quickly made our borzoi, Boris, a cherished member. One day, Boris felt a calling to explore beyond the cozy home. With a wag of his tail, Boris embarked on a daring journey, trotting through ${place}, crossing fields of ${color} flowers. Though Boris temporarily ran away, the memories of his escapades became legendary, and the family eagerly awaited his return.`;
  
      // Update a specific element with the generated Mad Lib
      const resultContainer = document.getElementById('result-container');
      resultContainer.textContent = madLib;
    });
  });