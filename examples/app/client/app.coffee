mySchema = new SimpleSchema
  editor:
    type: String
    optional: true

Template.editor.helpers
  data: -> {editor: 'new text'}
  schema: -> mySchema

