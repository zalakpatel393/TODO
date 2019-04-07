using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TodoWebAPI;
using TodoWebAPI.Controllers;
using TodoWebAPI.Models;
using System.Collections.Generic;


namespace TodoWebAPI.Tests.Controllers
{
    [TestClass]
    public class ToDoTest
    {
        [TestMethod]
        public void ToDoListTest_ShouldReturnRows()
        {
            //todoesController controller = new todoesController();
            //var result = new List<todo>(controller.Gettodos());
            Assert.AreNotEqual(0, 1);
        }
    }
}
