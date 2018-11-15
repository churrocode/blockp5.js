Blockly.Blocks['color'] = {
  init: function() {
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("r");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("g");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("b");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
