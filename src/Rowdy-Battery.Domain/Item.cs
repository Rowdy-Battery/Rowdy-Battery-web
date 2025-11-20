using System;
using System.Collections.Generic;

namespace Rowdy_Battery.Domain
{
    public sealed class Item
    {
        public string Name { get; }
        public string Description { get; }
        public string Brand { get; }
        public decimal Price { get; }

        public List<Rating> Ratings { get; } = new List<Rating>();

        public Item(string name, string description, string brand, decimal price)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            Description = description ?? string.Empty;
            Brand = brand ?? string.Empty;
            Price = price;
        }

        public void AddRating(Rating rating)
        {
            if (rating == null) throw new ArgumentNullException(nameof(rating));
            Ratings.Add(rating);
        }
    }
}
