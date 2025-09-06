import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Heart, Settings, Star, Edit } from "lucide-react";

const Profile = () => {
  const userStats = {
    itemsSold: 12,
    itemsBought: 25,
    rating: 4.8,
    reviews: 34,
    joined: "March 2023"
  };

  const myListings = [
    {
      id: 1,
      title: "Vintage Wooden Coffee Table",
      price: 150,
      status: "active",
      views: 45,
      image: "/api/placeholder/200/150"
    },
    {
      id: 2,
      title: "Organic Hemp Tote Bag",
      price: 25,
      status: "sold",
      views: 23,
      image: "/api/placeholder/200/150"
    }
  ];

  const purchaseHistory = [
    {
      id: 1,
      title: "Solar Garden Lights Set",
      price: 45,
      date: "2024-01-15",
      seller: "Solar Solutions",
      image: "/api/placeholder/200/150"
    },
    {
      id: 2,
      title: "Bamboo Cutting Board",
      price: 30,
      date: "2024-01-10",
      seller: "Kitchen Eco",
      image: "/api/placeholder/200/150"
    }
  ];

  const favorites = [
    {
      id: 1,
      title: "Recycled Plastic Planter",
      price: 35,
      seller: "Garden Green",
      image: "/api/placeholder/200/150"
    },
    {
      id: 2,
      title: "Upcycled Denim Jacket",
      price: 65,
      seller: "Fashion Forward",
      image: "/api/placeholder/200/150"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute -bottom-2 -right-2 w-8 h-8"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Sarah Johnson
                  </h1>
                  <p className="text-muted-foreground mb-4">
                    Eco-conscious seller & buyer • Member since {userStats.joined}
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{userStats.itemsSold}</div>
                      <div className="text-sm text-muted-foreground">Items Sold</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{userStats.itemsBought}</div>
                      <div className="text-sm text-muted-foreground">Items Bought</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary flex items-center gap-1">
                        {userStats.rating}
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <div className="text-sm text-muted-foreground">{userStats.reviews} Reviews</div>
                    </div>
                  </div>
                </div>

                <Button variant="eco">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-4">
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="purchases">Purchases</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="settings" className="hidden md:inline-flex">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="listings" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">My Listings</h2>
                <Button variant="eco">
                  <Package className="w-4 h-4 mr-2" />
                  Add New Item
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myListings.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold text-primary">
                          ${item.price}
                        </span>
                        <Badge 
                          variant={item.status === 'active' ? 'default' : 'secondary'}
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.views} views
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="purchases" className="space-y-6">
              <h2 className="text-2xl font-semibold">Purchase History</h2>
              
              <div className="space-y-4">
                {purchaseHistory.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full md:w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <span className="text-lg font-bold text-primary">
                              ${item.price}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-1">
                            Sold by {item.seller}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Purchased on {new Date(item.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-6">
              <h2 className="text-2xl font-semibold flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-500" />
                Favorite Items
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold text-primary">
                          ${item.price}
                        </span>
                        <Button variant="ghost" size="icon">
                          <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        by {item.seller}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-2xl font-semibold">Account Settings</h2>
              
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">First Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-lg mt-1" 
                          defaultValue="Sarah" 
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-lg mt-1" 
                          defaultValue="Johnson" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-2 border rounded-lg mt-1" 
                        defaultValue="sarah@example.com" 
                      />
                    </div>
                    <Button variant="eco">Save Changes</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;