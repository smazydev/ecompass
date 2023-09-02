export function addRippleEffect(e:any) {
    const ripple = document.createElement("span");
    const rect = e.target.getBoundingClientRect();
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + "px";
    ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + "px";
    ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + "px";
    ripple.classList.add('ripple');
    e.target.appendChild(ripple);
  
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
  