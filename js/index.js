class Greeting extends HTMLElement {
  // 'name' 이라는 속성의 변화를 감시한다.
  static get observedAttributes() {
    return ['name'];
  }

  // 속성의 변화에 반응한다.
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == 'name') {
      this.textContent = `Hello, ${newValue}`;
    }
  }
}

// 새로운 엘리멘트들 정의한다.
customElements.define('greeting-element', Greeting);
