import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./App.css";
function App() {
  return (
    <Box className="p-3  min-h-screen ">
      <div
        className="p-2"
        style={{
          backgroundImage:
            "linear-gradient(0,rgba(0,0,255,0.1),#1da1f2),url('https://wallpapercave.com/wp/WpDsR4v.jpg')",
        }}
      >
        <Box className="header p-3">
          <Box className="grid grid-cols-12 gap-4 ">
            <Box className="col-span-3 text-">
              <h1 className="text-orange-800 text-2xl font-medium ">
                Logo Công Ty
              </h1>
            </Box>

            <Box className="col-span-9 flex justify-between items-center">
              <Box
                className="bg-gray-100 w-[500px] h-10 flex justify-around items-center rounded-full"
                bgcolor={"rgb(243 244 246 / 60%)"}
              >
                <p>Home</p>
                <p>Sclution</p>
                <p>Showhome</p>
                <p className="text-orange-800">
                  <span className="border-b-2 border-orange-800">Mar</span>
                  ketplace
                </p>
                <p>Aboutlly</p>
              </Box>
              <Box className="pr-4 flex justify-end  items-center">
                <SearchIcon sx={{ color: "white" }} />
                <button
                  className="bg-white rounded-full w-16 h-7 text-white ml-3"
                  style={{ backgroundColor: "rgb(243 244 246 / 55%)" }}
                >
                  Login
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className=" flex-1 h-full rounded-md "
          bgcolor="rgb(243 244 246 / 50%)"
        >
          <Box className="p-3 grid lg:grid-cols-12 md:grid-cols-9 gap-4 md:gap-0 rounded-md h-full">
            <Box
              className="lg:col-span-8 md:col-span-5 rounded-md flex flex-col"
              height={"790px"}
            >
              <Box className="relative flex flex-col justify-between w-full h-32 mb-4 rounded-md">
                <h1 className="text-center lg:text-xl md:ml-32  ">
                  Let's us Know exactly what
                  <span className="text-green-700">functions</span> you need
                </h1>
                <Box
                  className="custom-border absolute  top-1 lg:w-40 md:w-32 h-11 rounded-tl-md origin-top-left p-2"
                  bgcolor={"rgb(243 244 246 / 70%)"}
                >
                  <button className=" border rounded-full bg-orange-800 lg:w-24 md:w-20 text-white">
                    filet
                  </button>
                </Box>
                <Box
                  className="custom grid lg:grid-cols-8 md:grid-cols-6 gap-3 p-3 h-[87px] md:h-20 rounded-md rounded-tl-none content-center"
                  bgcolor={"rgb(243 244 246 / 80%)"}
                >
                  <button className="bg-white border border-orange-800 rounded-md h-7 text-orange-800">
                    Api
                  </button>
                  <button className="bg-white border border-orange-800 rounded-md h-7 text-orange-800">
                    Api
                  </button>
                  <button className="bg-white rounded-md h-7">Api</button>
                  <button className="bg-white rounded-md h-7">Api</button>
                  <button className="bg-white rounded-md h-7">Api</button>
                  <button className="bg-white rounded-md h-7">Api</button>
                </Box>
              </Box>
              <Box
                className=" custom-scrollbar grid lg:grid-cols-5 md:grid-cols-2  gap-3 pr-2 flex-1 overflow-y-auto"
                style={{ height: "100px" }}
              >
                {Array.from({ length: 20 }).map((_, index) => (
                  <Box className="snap-center" key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 80 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
                        title="green iguana"
                      />
                      <CardContent className="flex flex-wrap justify-center">
                        <button className="bg-orange-800 rounded-full w-full h-7 text-white	">
                          Filer
                        </button>
                        <Typography
                          className="text-center"
                          variant="body2"
                          color="text.secondary"
                        >
                          Lizards are a widespread group
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="relative grid col-span-4 rounded-tl-md p-2 mt-8">
              <Box
                className="relative p-2 rounded-b-md rounded-tl-md "
                bgcolor={"rgb(243 244 246 / 80%)"}
              >
                <Box
                  className="shopcartCustom-border absolute bg-red-200 right-0 -top-10 w-64 md:w-44 h-10  rounded-t-md"
                  bgcolor={"rgb(243 244 246 / 80%)"}
                >
                  <Box className="flex justify-end items-center m-2 ">
                    <HighlightOffIcon sx={{ color: "rgb(210, 105, 30)" }} />
                    <button className="bg-green-700 rounded-full w-40 md:w-24 h-7 ml-2 text-white ">
                      Your Cart
                    </button>
                  </Box>
                </Box>
                <Box className="relative flex justify-between m-2">
                  <button className="text-green-700 rounded-full w-32 md:w-24 h-7 bg-slate-50">
                    Delete
                  </button>
                  <button className="text-green-700 rounded-full w-32 md:w-24 h-7  bg-slate-50">
                    Delete
                  </button>
                </Box>

                <Box className="grid grid-cols-1 gap-2 lg:mb-60 md:mb-28 md:text-sm">
                  <Box className=" grid grid-cols-3 gap-2 border-2 border-orange-800 rounded-md lg:p-3 md:p-1">
                    <Box className="row-span-2 col-span-1 h-full ">
                      <CardMedia
                        sx={{ height: 70, borderRadius: 2 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
                        title="green iguana"
                      />
                    </Box>
                    <Box className=" col-span-2 ">
                      <Box className="flex justify-between mb-2">
                        <p>Web function Pack</p>
                        <p className="text-orange-800 font-bold ">100.00 USD</p>
                      </Box>
                      <Box className="flex justify-between">
                        <button className="rounded-full w-24 h-7 bg-slate-50 ">
                          Delete
                        </button>
                        <p className="line-through">980 USD</p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" grid grid-cols-3 gap-2 border-2 border-orange-800 rounded-md lg:p-3 md:p-1">
                    <Box className="row-span-2 col-span-1 h-full ">
                      <CardMedia
                        sx={{ height: 70, borderRadius: 2 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
                        title="green iguana"
                      />
                    </Box>
                    <Box className=" col-span-2 ">
                      <Box className="flex justify-between mb-2">
                        <p>Web function Pack</p>
                        <p className="text-orange-800 font-bold ">100.00 USD</p>
                      </Box>
                      <Box className="flex justify-between">
                        <button className="rounded-full w-24 h-7 bg-slate-50 ">
                          Delete
                        </button>
                        <p className="line-through">980 USD</p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" grid grid-cols-3 gap-2 border-2 border-orange-800 rounded-md lg:p-3 md:p-1">
                    <Box className="row-span-2 col-span-1 h-full ">
                      <CardMedia
                        sx={{ height: 70, borderRadius: 2 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
                        title="green iguana"
                      />
                    </Box>
                    <Box className=" col-span-2 ">
                      <Box className="flex justify-between mb-2">
                        <p>Web function Pack</p>
                        <p className="text-orange-800 font-bold ">100.00 USD</p>
                      </Box>
                      <Box className="flex justify-between">
                        <button className="rounded-full w-24 h-7 bg-slate-50 ">
                          Delete
                        </button>
                        <p className="line-through">980 USD</p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="relative border border-green-400  rounded-md lg:p-3 md:p-1 md:pt-5 pt-6 text-[15px] md:mt-64">
                  <Box className="text-white absolute lg:bottom-[120px] -left-0.5  md:bottom-[116px] bg-green-700 w-28  text-center rounded-r-lg rounded-tl-lg p-1">
                    <p>tieu de duoi</p>
                  </Box>
                  <Box className="flex justify-between">
                    <p>12 Feabures</p> <p>1200.00 USD</p>
                  </Box>
                  <Box className="flex justify-between border-b border-b-red-400">
                    <p>Discount</p> <p>100.00 USD</p>
                  </Box>
                  <p className="text-right text-green-700 font-bold">
                    1100.00 USD
                  </p>
                  <Box className="flex justify-end pt-2 md:pt-0 pr-2 text-sm">
                    <button className="bg-white p-1 px-4 border border-orange-700 rounded-sm mr-2 md:m-1 ">
                      Contact us
                    </button>
                    <button className="bg-white p-1 px-4 border border-orange-700 rounded-sm md:m-1">
                      Place order
                    </button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default App;
