using Rowdy_Battery.Domain;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Rowdy_Battery.Domain.Tests;

[TestClass]
public sealed class RatingTests
{
    [TestMethod]
    public void Can_Create_New_Rating()
    {
        // Arrange
        var rating = new Rating(1, "Nike", "Great fit!");

        // Act (empty)

        // Assert
        Assert.AreEqual(1, rating.Stars);
        Assert.AreEqual("Nike", rating.UserName);
        Assert.AreEqual("Great fit!", rating.Review);

    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentOutOfRangeException))]
    public void Cannot_Create_Rating_With_Invalid_Stars()
    {
        // Arrange
        var rating = new Rating(6, "Nike", "Great fit!");
    }
}
