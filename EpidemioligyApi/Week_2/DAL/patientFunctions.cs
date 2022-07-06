using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Week_2.Models;

namespace Week_2.DAL
{
    public class patientFunctions
    {
        public static List<Report> GetReports()
        {
            List<Report> allReports = new List<Report>();
            foreach (Patient patient in Data.Data.patients)
            {
                allReports.AddRange(patient.reports);
            }
            return allReports;
        }
    }
}
