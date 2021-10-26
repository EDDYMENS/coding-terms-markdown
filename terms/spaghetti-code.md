## Definition
Spaghetti code is code that is difficult to understand and eventually maintain because its structure is all over the place hence the word spaghetti in its name.

## Use cases and Examples

One reference used in most examples is the `Goto` statement in code.

 Usually, code is meant to be executed from the top to bottom, but [keywords](keyword.md) such as `Goto` allow the execution to be moved to a previous line or a line entirely in a different file somewhere.

This makes it ever more difficult to follow the execution path.

```PHP
$x=(int)readline("enter a number");
if ($x%2==0)
   goto abc;
echo "x is an odd number";
return;
abc:
echo "x is an even number";
```

Most developers avoid the use of the `Goto` even if the [programming language](programming-language.md) in use supports it. However there are still many ways to end up with a spaghetti [codebase](source-code.md). Eg: By not organizing codebase files properly or in some situations mixing up different programming language in a messy way eg: mixing up HTML with PHP.

```PHP
$results = array(1, 2, 3, 4, 5, 6);
$max = count($results);
for($i = 0; $i < $max; $i++) {
    echo "<li>";
    echo "<div>result " . $results[$i] . "</div>";
    $i++;
    echo "<div>result " . $results[$i] . "</div>";
    echo "</li>";
}
```

## Summary
Most developers start projects without knowing it will end up with spaghetti code, it usually happens over time, hence developers usually need to learn patterns to follow when writing code, these are usually referred to as [software patterns](design-pattern.md) and sometimes going against them is known as an [anti-pattern](anti-pattern.md).