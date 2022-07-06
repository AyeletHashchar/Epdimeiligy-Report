using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Week_2.Models;

namespace Week_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        [HttpGet]
        public  List<Report> GetAllReports()
        {
            List<Report> allReports = new List<Report>();
            Data.Data.patients.ForEach((p => allReports.AddRange(p.reports)));
            return allReports;
        }

        [HttpGet("{id}")]
        public List<Report> GetReportsById(int id)
        {
            Patient curPatien = Data.Data.patients.FirstOrDefault(p => p.id == id);
            if(curPatien != null)
                return curPatien.reports;
            return new List<Report>();
        }

        [HttpGet]
        [Route("getReportsByCity/{city}")]

        public List<Report> GetReportsByCity(string city)
        {
            if (city == "-")
                city = "";
            List<Report> reports = new List<Report>();
            foreach (Patient patient in Data.Data.patients)
            {
                foreach (Report report in patient.reports)
                {
                    if (report.city.Contains(city))
                        reports.Add(report);
                }
            }
            return reports;
        }

        [HttpPost]
        [Route("{patientId}")]
        public void PostReport([FromBody] Report report, int patientId)
        {
            Patient curPatient = Data.Data.patients.FirstOrDefault(p => p.id == patientId);
            if (curPatient != null)
                curPatient.reports.Add(report);
            else
            {
                Patient newPatient = new Patient(new List<Report> { report }, patientId);
                Data.Data.patients.Add(newPatient);
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{patientId, ReportId}")]
        public void Delete(int patientId, int ReportId)
        {
            foreach (Patient patient in Data.Data.patients)
            {
                if (patient.id == patientId)
                {
                    foreach (Report report in patient.reports)
                    {
                        if (report.id == ReportId)
                            patient.reports.Remove(report);
                    }
                }
            }
        }
    }
}
