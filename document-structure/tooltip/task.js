const tooltips = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

tooltips.forEach((tip)=>{
    tip.addEventListener('click', (e)=>{
        e.preventDefault();

        if (activeTooltip || activeTooltip === e.currentTarget.tooltip) {
            activeTooltip.remove();
            activeTooltip = null;
            return;
        }

        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        tooltipElement.textContent = tip.getAttribute('title');

        const rect = tip.getBoundingClientRect();
        tooltipElement.style.position = 'absolute';
        tooltipElement.style.top = `${rect.bottom + window.scrollY}px`;
        tooltipElement.style.left = `${rect.left + window.scrollX}px`;

        document.body.appendChild(tooltipElement);
        tooltipElement.classList.add('tooltip_active');

        activeTooltip = tooltipElement;  
    })
})

document.addEventListener('click', (e)=>{
    if (activeTooltip && !activeTooltip.contains(e.target) && !e.target.classList.contains('has-tooltip')) {
        activeTooltip.remove();
        activeTooltip = null;
    }
})