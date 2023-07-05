function changeBrand() {
  const { classList: googleClassList } = document.querySelector('#logo__image--google');
  const { classList: oddityClassList } = document.querySelector('#logo__image--oddity');
  const brands = document.querySelectorAll('.brand');

  googleClassList.toggle('logo__image--hidden');
  oddityClassList.toggle('logo__image--hidden');
  
  brands.forEach((brand) => {
    brand.classList.toggle('brand--hidden');
  });

  const body = document.querySelector('body');
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'oddity' ? '' : 'oddity';
  body.setAttribute('data-theme', newTheme);
}
