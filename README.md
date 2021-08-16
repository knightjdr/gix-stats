# Generate summary statistics for GIX

Statistics are generated from tracking data exported from mongo

## Run script

```
node index.js --file=tracking.json
```

### Arguments

| argument      | definition                       | default         |
|---------------|----------------------------------|-----------------|
| --file        | json file with user queries      | 'tracking.json' |
| --outFolder   | folder to write stats            | 'output'        |

### Output

Will output summary statistics to a tab-delimited file call year-month-day-stats.txt`