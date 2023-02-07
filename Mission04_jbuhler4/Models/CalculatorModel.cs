using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission04_jbuhler4.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float Assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public float Project { get; set; }
        [Required]
        [Range(0, 100)]
        public float Quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public float Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public float Final { get; set; }
        [Required]
        [Range(0, 100)]
        public float Intex { get; set; }


    }
}
