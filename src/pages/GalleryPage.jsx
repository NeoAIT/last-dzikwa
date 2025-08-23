
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactPlayer from 'react-player/lazy';

const galleryItems = [
  { id: 1, type: 'video', src: "https://www.youtube.com/embed/QSw1JgELG6A", alt: "Children in a classroom raising hands", category: "Education", thumbnail: "https://img.youtube.com/vi/QSw1JgELG6A/hqdefault.jpg" },
  { id: 2, type: 'image', src: "https://i.imgur.com/g0StyLZ.jpg", alt: "Volunteers planting trees in a field", category: "Environment" },
  { id: 3, type: 'video', src: "https://www.youtube.com/embed/RVpmyRb7tuY", alt: "A short documentary about community empowerment", category: "Empowerment", thumbnail: "https://img.youtube.com/vi/RVpmyRb7tuY/hqdefault.jpg" },
  { id: 4, type: 'image', src: "https://i.imgur.com/1firRzk.jpg", alt: "A group of women participating in a workshop", category: "Empowerment" },
  { id: 5, type: 'image', src: "https://i.imgur.com/Nsf4SvB.jpg", alt: "Teenagers playing soccer on a dusty field", category: "Sports" },
  { id: 6, type: 'video', src: "https://www.youtube.com/embed/Fb8hzbC2bpI", alt: "This Is Me (The Greatest Showman) | Cover by The Dzikwa Trust Choir", category: "Arts & Culture", thumbnail: "https://img.youtube.com/vi/Fb8hzbC2bpI/hqdefault.jpg" },
  { id: 7, type: 'image', src: "https://i.imgur.com/rPhesSv.jpg", alt: "A health worker checking a child's temperature", category: "Wellbeing" },
  { id: 8, type: 'video', src: "https://www.youtube.com/embed/ey5ZaDH5uU8", alt: "Highlights from the annual sports gala", category: "Arts", thumbnail: "https://img.youtube.com/vi/ey5ZaDH5uU8/hqdefault.jpg" },
  { id: 9, type: 'image', src: "https://i.imgur.com/qbLKf3y.jpg", alt: "Students working on laptops in a computer lab", category: "Education" },
  { id: 10, type: 'image', src: "https://i.imgur.com/8b0rPJ0.jpg", alt: "A woman displaying handcrafted goods", category: "Empowerment" },
  { id: 11, type: 'video', src: "https://www.youtube.com/embed/l4v6KnTzZds", alt: "Video description here", category: "Community", thumbnail: "https://img.youtube.com/vi/l4v6KnTzZds/hqdefault.jpg" },
  { id: 12, type: 'image', src: "https://i.imgur.com/1firRzk.jpg", alt: "A community garden full of fresh vegetables", category: "Environment" },
  { id: 13, type: 'image', src: "https://i.imgur.com/9sxXFJN.jpg", alt: "Young girls in a sisterhood circle", category: "Empowerment" },
  { id: 14, type: 'video', src: "https://www.youtube.com/embed/hMgDviJK4gc", alt: "A performing arts group in colorful costumes", category: "Arts & Culture", thumbnail: "https://img.youtube.com/vi/hMgDviJK4gc/hqdefault.jpg" },
  { id: 15, type: 'image', src: "https://i.imgur.com/YXpHEui.jpg", alt: "Description of the image here", category: "Wellbeing" },
  { id: 16, type: 'image', src: "https://i.imgur.com/5jLsQni.jpg", alt: "Description of the image here", category: "Education" },
  { id: 17, type: 'video', src: "https://www.youtube.com/embed/_X5uyFBcgfE", alt: "O Come, All Ye Faithful – The Dzikwa Trust Choir", category: "Arts & Culture", thumbnail: "https://img.youtube.com/vi/_X5uyFBcgfE/hqdefault.jpg" },
  { id: 18, type: 'video', src: "https://www.youtube.com/embed/psBQz4rK38o", alt: "Volunteering in Dzikwa – Experiences and Insights", category: "Community", thumbnail: "https://img.youtube.com/vi/psBQz4rK38o/hqdefault.jpg" },

];

const categories = ["All", "Education", "Environment", "Empowerment", "Sports", "Wellbeing", "Arts & Culture"];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  
  const filteredItems = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return galleryItems.filter(item => {
      const matchesCategoryFilter = activeFilter === "All" || item.category === activeFilter;
      
      const matchesSearch = 
        item.alt.toLowerCase().includes(lowercasedSearchTerm) || 
        item.category.toLowerCase().includes(lowercasedSearchTerm);
      
      return matchesCategoryFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Gallery - Dzikwa Trust</title>
        <meta name="description" content="A visual journey through the work and impact of Dzikwa Trust. See our programs in action and the communities we serve." />
        <meta property="og:title" content="Gallery - Dzikwa Trust" />
        <meta property="og:description" content="A visual journey through the work and impact of Dzikwa Trust." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-r from-primary-custom to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            A visual story of hope, empowerment, and transformation.
          </motion.p>
        </div>
      </section>

      <div className="py-20 bg-light-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map(category => (
                        <Button 
                            key={category}
                            variant={activeFilter === category ? "default" : "outline"}
                            onClick={() => setActiveFilter(category)}
                            className="rounded-full"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="relative w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                        type="text"
                        placeholder="Search by category or keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-full w-full md:w-64"
                    />
                </div>
            </div>

          <AnimatePresence>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-[10px] shadow-lg cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleItemClick(item)}
              >
                <img 
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  alt={item.alt}
                  src={item.type === 'image' ? item.src : item.thumbnail} />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                  {item.type === 'video' && (
                    <PlayCircle className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent w-full">
                  <h3 className="font-bold">{item.category}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()} 
            >
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="max-w-full max-h-[90vh] rounded-[10px] shadow-2xl"
                />
              ) : (
                <div className="aspect-video bg-black rounded-[10px] overflow-hidden shadow-2xl">
                  <ReactPlayer
                    url={selectedItem.src}
                    width="100%"
                    height="100%"
                    controls
                    playing
                  />
                </div>
              )}
              <motion.button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-dark-custom"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
