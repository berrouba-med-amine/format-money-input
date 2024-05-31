$(document).ready(function() {
  // for all money_input classes
  $('.money_input').each(function () {
    // get moneu input
    const moneyInput = $(this);
    
    // create formatted input    
    const formattedInput = $('<input>').attr({
      type: 'text',
      class: 'formatted-money',
      readonly: true,
      style: 'display: none;'
    });

    // insert and position formattedInput
    const insertAndPositionFormattedInput = () => {
      moneyInput.after(formattedInput);
      const moneyInputRect = moneyInput.get(0).getBoundingClientRect();
      formattedInput.css({
        left: `${moneyInputRect.left}px`,
        top: `${moneyInputRect.top}px`,
        width: `${moneyInputRect.width}px`
      });
    }

    // update formatted input
    const updateFormattedInput = () => {
      formattedInput.val(moneyformat(moneyInput.val()));
    }
    
    // show money input
    const showMoneyInput = () => {
      moneyInput.show();
      formattedInput.hide();
    }

    // show formatted input
    const hideMoneyInput = () => {
      moneyInput.hide();
      formattedInput.show();
    }

    // listen to some callbacks
    moneyInput.on('input', updateFormattedInput);
    formattedInput.on('click', showMoneyInput);
    moneyInput.on('mouseleave', hideMoneyInput);
    moneyInput.on('blur', hideMoneyInput);
  
    insertAndPositionFormattedInput();
    updateFormattedInput();
    hideMoneyInput();

  });
});
