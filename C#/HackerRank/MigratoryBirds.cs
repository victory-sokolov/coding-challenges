using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// Task: https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

public class MigratoryBirds
{
    public static int migratoryBirds(List<int> arr)
    {
        var frequencies = new Dictionary<int, int>();
        int currentCount = 0;
        foreach (int item in arr)
        {
            frequencies.TryGetValue(item, out currentCount);
            frequencies[item] = currentCount + 1;
        }

        int maxKey = 0;
        int maxValue = 0;
        foreach (var val in frequencies)
        {
            if (val.Value > maxValue)
            {
                maxValue = val.Value;
                maxKey = val.Key;
            }

            if (val.Value == maxValue && val.Key < maxKey)
            {
                maxKey = val.Key;
            }
        }

        return maxKey;
    }
}
