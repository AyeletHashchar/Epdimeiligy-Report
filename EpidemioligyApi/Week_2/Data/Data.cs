using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Week_2.Models;

namespace Week_2.Data
{
    public class Data
    {
        public static Report r1 = new Report() { city = "jerusalem", location = "library", endDate = new DateTime(1974, 7, 10, 9, 10, 24), startDate = new DateTime(1974, 7, 10, 7, 10, 24) };
        public static Report r2 = new Report() { city = "jerusalem", location = "restraunt", endDate = new DateTime(2002, 11, 24, 10, 31, 2), startDate = new DateTime(2002, 11, 24, 11, 45, 32) };
        public static Report r3 = new Report() { city = "tel aviv", location = "park", endDate = new DateTime(2022, 3, 17, 16, 2, 15), startDate = new DateTime(2022, 3, 17, 20, 16, 54) };
        public static Report r4 = new Report() { city = "bney brak", location = "garden", endDate = new DateTime(2017, 8, 19, 12, 10, 25), startDate = new DateTime(2017, 8, 19, 14, 1, 2) };
        public static Report r5 = new Report() { city = "bney brak", location = "school", endDate = new DateTime(2016, 1, 3, 8, 3, 44), startDate = new DateTime(2016, 1, 3, 13, 7, 29) };

        public static List<Patient> patients = new List<Patient>()
        {
            { new Patient(new List<Report> { r1, r2, r3 }, 1)},
            { new Patient(new List<Report> { r1, r5 }, 2)},
            { new Patient(new List<Report> { r2, r4, r5 }, 3)},
            { new Patient(new List<Report> { r1, r2, r3, r4 }, 4)},

        };
    }
}
