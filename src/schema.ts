import {buildSchema} from 'graphql'

const schema = buildSchema(`
	type Query {
		ping: String
	}
`)

export default schema
