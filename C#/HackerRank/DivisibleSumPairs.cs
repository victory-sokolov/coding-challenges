using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// Task: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

public class DivisibleSumPairs
{

    /*
        * Complete the 'divisibleSumPairs' function below.
        *
        * The function is expected to return an INTEGER.
        * The function accepts following parameters:
        *  1. INTEGER n
        *  2. INTEGER k
        *  3. INTEGER_ARRAY ar
        */

    public static int divisibleSumPairs(int n, int k, List<int> ar)
    {
        int counter = 0;

        for (int i = 0; i < ar.Count; i++)
        {
            for (int j = i + 1; j < ar.Count; j++)
            {
                if ((ar[i] + ar[j]) % k == 0 || ar[i] < ar[j] && ar[i] + ar[j] == k)
                {
                    counter++;
                }
            }
        }

        return counter;
    }

}
