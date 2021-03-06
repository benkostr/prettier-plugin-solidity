const {
  doc: {
    builders: { concat, group, indent, join, line, softline }
  }
} = require('prettier/standalone');

// This function will add an indentation to the `list` and separate it from the
// rest of the `doc` in most cases by a `softline`.
// the list itself will be printed with a separator that in most cases is a
// comma (,) and a `line`
//
// NOTE: the resulting `doc` is wrapped in a `group` because multiple items
// are usually their own structure.
const printSeparatedList = (
  list,
  {
    firstSeparator = softline,
    separator = concat([',', line]),
    lastSeparator = firstSeparator
  } = {}
) =>
  group(
    concat([
      indent(concat([firstSeparator, join(separator, list)])),
      lastSeparator
    ])
  );

module.exports = printSeparatedList;
