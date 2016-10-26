export default function staysYellowIndex(kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],
    id: 'stays_yellow',

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true)
      }).default();
    },

    /*
     * Plugin status stays yellow for 1 minute. Then goes green.
     */
    init(server) {
      this.status.yellow('Waiting...');
      setTimeout(() => {
        this.status.green('Ready');
      }, 60 * 1000);
    }
  });
};
