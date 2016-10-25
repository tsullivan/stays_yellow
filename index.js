export default function staysYellowIndex(kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],
    id: 'stays_yellow',

    /*
     * Plugin status stays yellow for 1 minute. Then goes green.
     */
    init: function (server, _options) {
      this.status.yellow('Waiting...');
      setTimeout(() => {
        this.status.green('Ready');
      }, 60 * 1000);
    }
  });
};
