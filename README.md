Reproduction for bug described in: https://github.com/dotansimha/graphql-code-generator/issues/5758

Running: `yarn graphql-codegen --config codegen.yml` will raise the following error:

```
AggregateError:
        GraphQLDocumentError: Cannot query field "two" on type "Query".
            at /Users/marc/programing/homeskillet/codegen_bug/src/graphql/queries.graphql:2:3
        at new AggregateError (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@ardatan/aggregate-error/index.cjs.js:141:24)
        at Object.checkValidationErrors (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-tools/utils/index.cjs.js:958:15)
        at Object.codegen (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/core/index.cjs.js:102:15)
        at async process (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/cli/bin.js:975:56)
        at async Promise.all (index 0)
        at async /Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/cli/bin.js:982:37
        at async Task.task (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/cli/bin.js:760:17)
    AggregateError:
        GraphQLDocumentError: Cannot query field "two" on type "Query".
            at /Users/marc/programing/homeskillet/codegen_bug/src/graphql/queries.graphql:2:3
        at new AggregateError (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@ardatan/aggregate-error/index.cjs.js:141:24)
        at Object.checkValidationErrors (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-tools/utils/index.cjs.js:958:15)
        at Object.codegen (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/core/index.cjs.js:102:15)
        at async process (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/cli/bin.js:975:56)
        at async Promise.all (index 0)
        at async /Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/cli/bin.js:982:37
        at async Task.task (/Users/marc/programing/homeskillet/codegen_bug/node_modules/@graphql-codegen/cli/bin.js:760:17)
```


Editing the schema.graphql to the following fixes the issue:

```
schema {
    query: query_root
}

#type Query {
#    one: String
#}

type query_root {
    two: String
}
```

The issues seems to be that the schema query defintion is ignored when generating code for new queries/mutations
