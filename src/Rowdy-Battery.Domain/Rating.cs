using System;

namespace Rowdy_Battery.Domain
{
    public sealed class Rating
    {
        public int Stars { get; }
        public string UserName { get; }
        public string Review { get; }

        public Rating(int stars, string userName, string review)
        {
            if (stars < 1 || stars > 5)
                throw new ArgumentOutOfRangeException(nameof(stars), "Stars must be between 1 and 5.");

            Stars = stars;
            UserName = userName ?? throw new ArgumentNullException(nameof(userName));
            Review = review ?? string.Empty;
        }
    }
}
