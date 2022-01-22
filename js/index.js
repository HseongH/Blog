class CustomInput extends HTMLElement {
  connectedCallback() {
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.id = 'input-name';

    label.textContent = '이름을 입력하세요';
    label.setAttribute('for', 'input-name');

    this.appendChild(label);
    this.appendChild(input);
  }
}

customElements.define('custom-input', CustomInput);
