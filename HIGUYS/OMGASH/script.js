document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const noun = formData.get('noun');
    const adjective = formData.get('adjective');
    const verb = formData.get('verb');
    const place = formData.get('place');
    const color = formData.get('color');

    const madLib = `In a lively ${adjective} setting, a spirited ${noun} with ${color} features loved to ${verb} around. Adopted by a loving community, this remarkable ${noun} brought joy to their cozy ${place}. One day, the adventurous spirit of the ${noun} led it to explore beyond the familiar surroundings, engaging in ${verb} and making new connections. Despite a brief venture, the community eagerly awaited the return of their lively ${noun}, anticipating stories as vibrant as the spirited activities of their unique companion.`;


    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = madLib;
  });
});