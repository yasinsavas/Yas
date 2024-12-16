import React, { useState } from 'react';
import { Book, Download, Clock, Globe } from 'lucide-react';
import { PageHeader } from '../components/shared/ui/PageHeader';
import { CatalogList } from '../components/catalog/CatalogList';
import { CatalogGrid } from '../components/catalog/CatalogGrid';
import { CatalogSearch } from '../components/catalog/CatalogSearch';
import AddCatalogModal from '../components/catalog/AddCatalogModal';
import AddCategoryModal from '../components/catalog/AddCategoryModal';
import ViewCatalogModal from '../components/catalog/ViewCatalogModal';
import DeleteModal from '../components/shared/ui/DeleteModal';

const stats = [
  {
    title: "Toplam Katalog",
    value: "12",
    subtitle: "3 dilde mevcut",
    icon: Book
  },
  {
    title: "Aktif Katalog",
    value: "8",
    subtitle: "%66 aktif",
    icon: Globe
  },
  {
    title: "Toplam İndirme",
    value: "5.2K",
    subtitle: "Son 30 gün",
    icon: Download
  },
  {
    title: "Son Güncelleme",
    value: "2 saat",
    subtitle: "önce",
    icon: Clock
  }
];

// Örnek katalog verileri
const catalogs = [
  {
    id: 1,
    name: '2024 Ürün Kataloğu',
    category: 'Genel',
    language: 'Türkçe',
    pages: 48,
    size: '12.5 MB',
    downloads: 1250,
    lastUpdated: '2024-03-15',
    status: 'Aktif',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'Industrial Solutions 2024',
    category: 'Endüstriyel',
    language: 'İngilizce',
    pages: 64,
    size: '15.8 MB',
    downloads: 850,
    lastUpdated: '2024-03-10',
    status: 'Aktif',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'Technical Specifications',
    category: 'Teknik',
    language: 'İngilizce',
    pages: 32,
    size: '8.2 MB',
    downloads: 620,
    lastUpdated: '2024-03-05',
    status: 'Aktif',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  }
];

function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [modalState, setModalState] = useState({
    addCatalog: false,
    addCategory: false,
    view: false,
    delete: false
  });
  const [selectedCatalog, setSelectedCatalog] = useState<any>(null);

  const handleCloseModals = () => {
    setModalState({
      addCatalog: false,
      addCategory: false,
      view: false,
      delete: false
    });
    setSelectedCatalog(null);
  };

  const handleAction = (type: 'view' | 'delete', catalog: any) => {
    setSelectedCatalog(catalog);
    setModalState(prev => ({ ...prev, [type]: true }));
  };

  const filteredCatalogs = catalogs.filter(catalog => 
    catalog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    catalog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto space-y-8">
        <PageHeader
          title="E-Katalog Yönetimi"
          subtitle="Dijital ürün kataloglarını yönetin"
          stats={stats}
        />
        
        <CatalogSearch
          value={searchTerm}
          onChange={setSearchTerm}
          onAddCatalog={() => setModalState(prev => ({ ...prev, addCatalog: true }))}
          onAddCategory={() => setModalState(prev => ({ ...prev, addCategory: true }))}
          view={viewMode}
          onViewChange={setViewMode}
        />

        {viewMode === 'list' ? (
          <CatalogList
            catalogs={filteredCatalogs}
            onView={(catalog) => handleAction('view', catalog)}
            onDelete={(catalog) => handleAction('delete', catalog)}
          />
        ) : (
          <CatalogGrid
            catalogs={filteredCatalogs}
            onView={(catalog) => handleAction('view', catalog)}
            onDelete={(catalog) => handleAction('delete', catalog)}
          />
        )}

        <AddCatalogModal
          isOpen={modalState.addCatalog}
          onClose={handleCloseModals}
        />

        <AddCategoryModal
          isOpen={modalState.addCategory}
          onClose={handleCloseModals}
        />

        {selectedCatalog && (
          <>
            <ViewCatalogModal
              isOpen={modalState.view}
              onClose={handleCloseModals}
              catalog={selectedCatalog}
            />
            <DeleteModal
              isOpen={modalState.delete}
              onClose={handleCloseModals}
              onConfirm={handleCloseModals}
              title="Katalog Silme"
              message={`"${selectedCatalog.name}" kataloğunu silmek istediğinize emin misiniz?`}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;