import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Info } from 'lucide-react';
import { menuItems } from '../data/menuData';
import FoodCard from '../components/FoodCard';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSpiceFilter, setActiveSpiceFilter] = useState('all');
  const [vegOnly, setVegOnly] = useState(false);

  // Core Categories
  const categories = [
    { id: 'all', label: 'All Ovens' },
    { id: 'biryani', label: 'Kunda Biryanis' },
    { id: 'starter', label: 'Appetizers' },
    { id: 'curry', label: 'Clay Curries' },
    { id: 'dessert', label: 'Sweets & Kulfi' },
    { id: 'refresher', label: 'Refreshers' }
  ];

  // Perform search & state filters
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // 1. Category check
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      
      // 2. Search check
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 3. Spice filter check
      let matchesSpice = true;
      if (activeSpiceFilter === 'sweet') {
        matchesSpice = item.spicyScale === 0;
      } else if (activeSpiceFilter === 'medium') {
        matchesSpice = item.spicyScale > 0 && item.spicyScale <= 2;
      } else if (activeSpiceFilter === 'spicy') {
        matchesSpice = item.spicyScale >= 3;
      }

      // 4. Veg filter check
      const matchesVeg = !vegOnly || item.isVeg === true;

      return matchesCategory && matchesSearch && matchesSpice && matchesVeg;
    });
  }, [searchTerm, activeCategory, activeSpiceFilter, vegOnly]);

  return (
    <div className="menu-page">
      {/* Menu Header banner */}
      <header className="menu-hero flex-center">
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-subtitle">Traditional Clay Kitchen</span>
          <h1 className="menu-title text-gradient-spicy">Naidu Gari Earthen Menu</h1>
          <p className="menu-subtitle">Explore a collection of spice-laden culinary art baked in customized clay pots</p>
        </div>
        <div className="menu-hero-glow"></div>
      </header>

      {/* Main Filter & Grid Container */}
      <main className="container menu-main">
        {/* Search & Preference Bar */}
        <div className="menu-controls-wrapper glass-panel">
          <div className="search-bar-box flex-center">
            <Search size={18} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Search spicy biryani, ghee roast, apricot delight..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="controls-options">
            {/* Veg toggle slider */}
            <label className="veg-toggle-label flex-center">
              <input 
                type="checkbox" 
                checked={vegOnly} 
                onChange={(e) => setVegOnly(e.target.checked)} 
              />
              <span className={`toggle-slider-button ${vegOnly ? 'active' : ''}`}></span>
              <span className="label-text">Veg Only</span>
            </label>

            {/* Spice filter selection */}
            <div className="spice-select-box flex-center">
              <SlidersHorizontal size={14} color="var(--primary)" />
              <select 
                value={activeSpiceFilter} 
                onChange={(e) => setActiveSpiceFilter(e.target.value)}
                aria-label="Filter by spice level"
              >
                <option value="all">All Heat Levels</option>
                <option value="sweet">Sweet / Mild (0 🔥)</option>
                <option value="medium">Medium (1-2 🔥🔥)</option>
                <option value="spicy">Andhra Spicy (3-4 🔥🔥🔥)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Info Box about Cooking time */}
        <div className="clay-info-banner flex-center glass-panel">
          <Info size={16} color="var(--secondary)" />
          <p>
            <strong>Note on Freshness:</strong> Every clay-pot item is dum-sealed individually. Please allow 20-30 minutes for our master chefs to slow-bake your Kunda to absolute perfection.
          </p>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="menu-empty-state flex-center glass-panel">
            <div className="empty-pot flex-center">
              <SlidersHorizontal size={36} color="var(--text-muted)" />
            </div>
            <h2>No sizzling dishes found!</h2>
            <p>We couldn't find anything matching your specific search parameters. Try adjusting your heat scale or clearing the search terms.</p>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
                setActiveSpiceFilter('all');
                setVegOnly(false);
              }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid-responsive menu-grid">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      {/* Styled Menu CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .menu-page {
          min-height: 100vh;
          padding-top: var(--header-height);
        }

        .menu-hero {
          position: relative;
          height: 300px;
          background: linear-gradient(180deg, rgba(42, 21, 12, 0.4) 0%, var(--bg-deep) 100%);
          overflow: hidden;
          margin-bottom: 40px;
        }

        .menu-hero-glow {
          position: absolute;
          width: 500px;
          height: 150px;
          background: var(--primary-glow);
          filter: blur(100px);
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .menu-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .menu-subtitle {
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
          font-size: 1rem;
        }

        .menu-main {
          margin-bottom: 80px;
        }

        /* Controls styling */
        .menu-controls-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          margin-bottom: 30px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .search-bar-box {
          background: var(--bg-input);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 10px 20px;
          flex-grow: 1;
          max-width: 500px;
          gap: 12px;
        }

        .search-bar-box input {
          width: 100%;
          font-size: 0.95rem;
        }

        .search-bar-box input::placeholder {
          color: var(--text-muted);
        }

        .controls-options {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* Veg toggle sliding styling */
        .veg-toggle-label {
          cursor: pointer;
          gap: 10px;
          user-select: none;
        }

        .veg-toggle-label input {
          display: none;
        }

        .toggle-slider-button {
          width: 44px;
          height: 24px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          position: relative;
          transition: var(--transition);
        }

        .toggle-slider-button::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--text-secondary);
          transition: var(--transition);
        }

        .toggle-slider-button.active {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.4);
        }

        .toggle-slider-button.active::before {
          left: 23px;
          background: var(--success);
        }

        .label-text {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* Spice Select option box */
        .spice-select-box {
          background: var(--bg-input);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 10px 20px;
          gap: 8px;
        }

        .spice-select-box select {
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .spice-select-box select option {
          background: var(--bg-card);
          color: var(--text-primary);
        }

        /* Category Tabs button row */
        .category-tabs-container {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 12px;
          margin-bottom: 24px;
          scrollbar-width: thin;
        }

        .category-tabs-container::-webkit-scrollbar {
          height: 4px;
        }

        .category-tab-btn {
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 12px 24px;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .category-tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--text-muted);
        }

        .category-tab-btn.active {
          background: var(--primary);
          color: var(--text-primary);
          border-color: var(--primary);
          box-shadow: 0 4px 15px rgba(220, 90, 43, 0.25);
        }

        /* Clay Warning Banner info box */
        .clay-info-banner {
          background: rgba(245, 158, 11, 0.05);
          border: 1px solid rgba(245, 158, 11, 0.15);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 40px;
          gap: 12px;
          justify-content: flex-start;
        }

        .clay-info-banner p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .clay-info-banner strong {
          color: var(--secondary);
        }

        /* Grid */
        .menu-grid {
          margin-top: 20px;
        }

        /* Empty State Menu */
        .menu-empty-state {
          flex-direction: column;
          padding: 60px 40px;
          text-align: center;
          max-width: 600px;
          margin: 40px auto;
        }

        .empty-pot {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.02);
          border: 1px dashed var(--border);
          margin-bottom: 24px;
        }

        .menu-empty-state h2 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .menu-empty-state p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 420px;
        }

        @media (max-width: 992px) {
          .menu-controls-wrapper {
            flex-direction: column;
            align-items: stretch;
          }
          .search-bar-box {
            max-width: 100%;
          }
          .controls-options {
            justify-content: space-between;
          }
        }

        @media (max-width: 768px) {
          .menu-title {
            font-size: 2.25rem;
          }
        }
      `}} />
    </div>
  );
}
