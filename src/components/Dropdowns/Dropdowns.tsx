/** @format */

"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import IngredientSelect from "@/components/IngredientSelect";

const MEAT_FISH = [
  "Chicken",
  "Beef",
  "Lamb",
  "Goose",
  "Turkey",
  "Minced meat",
  "Minced chicken",
  "Sausage",
  "Pork",
  "Rabbit",
  "Octopus",
  "Shrimp",
  "Squid",
  "Oyster",
  "Shrimp",
  "Tuna",
  "Salmon",
];
const VEGETABLES = [
  "Carrot",
  "Broccoli",
  "Spinach",
  "Tomato",
  "Cucumber",
  "Lettuce",
  "Bell Pepper",
  "Zucchini",
  "Eggplant",
  "Cabbage",
  "Cauliflower",
  "Kale",
  "Onion",
  "Garlic",
  "Green Beans",
  "Peas",
  "Radish",
  "Pumpkin",
  "Sweet Potato",
  "Celery",
];
const BEANS = [
  "Black Beans",
  "Kidney Beans",
  "Chickpeas",
  "Lentils",
  "Pinto Beans",
  "Navy Beans",
  "Cannellini Beans",
  "Fava Beans",
  "Mung Beans",
  "Adzuki Beans",
  "Soybeans",
  "Butter Beans",
  "Green Beans",
];
const GRAINS = [
  "Rice",
  "Quinoa",
  "Oats",
  "Barley",
  "Millet",
  "Buckwheat",
  "Couscous",
  "Bulgur",
  "Amaranth",
  "Sorghum",
  "Rye",
];
const HERBS = [
  "Basil",
  "Parsley",
  "Cilantro",
  "Mint",
  "Rosemary",
  "Thyme",
  "Oregano",
  "Dill",
  "Chives",
  "Sage",
  "Tarragon",
  "Marjoram",
  "Lemongrass",
];
const DAIRY = [
  "Milk",
  "Cheese",
  "Yogurt",
  "Butter",
  "Cream",
  "Sour Cream",
  "Cottage Cheese",
  "Cream Cheese",
  "Ghee",
];
const OTHER = [
  "Eggs",
  "Tofu",
  "Mushrooms",
  "Seaweed",
  "Honey",
  "Olives",
  "Pickles",
  "Tempeh",
  "Miso",
  "Vinegar",
];

const Dropdowns = () => {
  const [selected, setSelected] = useState({
    meatFish: [] as string[],
    vegetables: [] as string[],
    beans: [] as string[],
    grains: [] as string[],
    herbs: [] as string[],
    dairy: [] as string[],
    other: [] as string[],
  });

  return (
    <Box mt={4} display="flex" flexDirection="column" gap={2}>
      <IngredientSelect
        label="Meat & Fish"
        options={MEAT_FISH}
        value={selected.meatFish}
        onChange={(newValue) =>
          setSelected((prev) => ({ ...prev, meatFish: newValue }))
        }
      />
      <IngredientSelect
        label="Vegetables"
        options={VEGETABLES}
        value={selected.vegetables}
        onChange={(newValue) =>
          setSelected((prev) => ({ ...prev, vegetables: newValue }))
        }
      />
      <IngredientSelect
        label="Beans"
        options={BEANS}
        value={selected.beans}
        onChange={(newValue) =>
          setSelected((prev) => ({ ...prev, beans: newValue }))
        }
      />
      <IngredientSelect
        label="Grains"
        options={GRAINS}
        value={selected.grains}
        onChange={(newValue) =>
          setSelected((prev) => ({ ...prev, grains: newValue }))
        }
      />
      <IngredientSelect
        label="Herbs"
        options={HERBS}
        value={selected.herbs}
        onChange={(newValue) =>
          setSelected((prev) => ({ ...prev, herbs: newValue }))
        }
      />
      <IngredientSelect
        label="Dairy"
        options={DAIRY}
        value={selected.dairy}
        onChange={(newValue) =>
          setSelected((prev) => ({ ...prev, dairy: newValue }))
        }
      />

      <IngredientSelect
        label="Other"
        options={OTHER}
        value={selected.other}
        onChange={(newValue) =>
          setSelected((prev) => ({ ...prev, other: newValue }))
        }
      />
    </Box>
  );
};

export default Dropdowns;
