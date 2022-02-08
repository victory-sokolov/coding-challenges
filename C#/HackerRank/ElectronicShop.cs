// Task: https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
using System;
class ElectronicShop
{

    static int getMoneySpent(int[] keyboards, int[] drives, int b)
    {
        int max = 0;

        foreach (int keyboard in keyboards)
        {
            foreach (int drive in drives)
            {
                int sum = keyboard + drive;
                if (sum > max && sum <= b)
                {
                    max = sum;
                }
            }
        }
        return (max > 0) ? max : -1;
    }

    static void Main(string[] args)
    {
        int[] keyboards = { 40, 50, 60 };
        int[] drives = { 5, 8, 12 };
        int budget = 60;
        int result = ElectronicShop.getMoneySpent(keyboards, drives, budget);
    }

}
