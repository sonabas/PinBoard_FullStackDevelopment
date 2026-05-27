const router = require("express").Router();

router.get("/", async (req, res) => {

  res.json([
    {
      id: 1,
      title: "Sample Post",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
    }
  ]);

});

module.exports = router;
