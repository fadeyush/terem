// 2.5 и 2.6
(function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    const formInfo = document.createElement('div');

    formInfo.innerHTML = `
          <div>${json}</div>
          `;
  
    document.querySelector('body').append(formInfo);

    const getResource = async (url) => {
      const res = await fetch(url);
  
      if (res.ok) {
        alert('Форма успешно отправлена!');
      }

      return await res.json();
    };
  
    const url = 'https://formtest.free.beeceptor.com';
    
    getResource(url);

    form.reset();
  });
}());

